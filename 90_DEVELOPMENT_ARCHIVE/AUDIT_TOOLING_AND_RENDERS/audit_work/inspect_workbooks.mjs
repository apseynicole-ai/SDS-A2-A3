import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const [outDir, ...inputs] = process.argv.slice(2);
if (!outDir || inputs.length === 0) throw new Error("usage: inspect_workbooks.mjs OUT INPUT...");
await fs.mkdir(outDir, { recursive: true });

for (const input of inputs) {
  const blob = await FileBlob.load(input);
  const wb = await SpreadsheetFile.importXlsx(blob);
  const summary = await wb.inspect({
    kind: "workbook,sheet,table,definedName,drawing",
    maxChars: 20000,
    tableMaxRows: 12,
    tableMaxCols: 12,
    tableMaxCellChars: 120,
  });
  const stem = path.basename(input, path.extname(input));
  await fs.writeFile(path.join(outDir, `${stem}-summary.ndjson`), summary.ndjson, "utf8");

  const sheetInfo = await wb.inspect({ kind: "sheet", include: "id,name", maxChars: 10000 });
  const records = sheetInfo.ndjson.split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
  const names = records.map(r => r.name).filter(Boolean);
  for (const name of names) {
    const table = await wb.inspect({
      kind: "table,formula,region",
      sheetId: name,
      range: "A1:ZZ10000",
      maxChars: 30000,
      tableMaxRows: 40,
      tableMaxCols: 40,
      options: { maxResults: 500 },
    });
    const safe = name.replace(/[^A-Za-z0-9._-]+/g, "_");
    await fs.writeFile(path.join(outDir, `${stem}-${safe}.ndjson`), table.ndjson, "utf8");
    const image = await wb.render({ sheetName: name, autoCrop: "all", scale: 1, format: "png" });
    await fs.writeFile(path.join(outDir, `${stem}-${safe}.png`), new Uint8Array(await image.arrayBuffer()));
  }
}
