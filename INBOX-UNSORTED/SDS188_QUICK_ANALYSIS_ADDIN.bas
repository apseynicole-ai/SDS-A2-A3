Attribute VB_Name = "SDS188QuickAnalysis"
Option Explicit

Public Sub SDSQuickAnalysis()
    Dim rng As Range, wb As Workbook, ws As Worksheet
    Dim n As Long, conf As Double, alpha As Double
    Dim sigmaText As String, sigmaKnown As Boolean, sigmaPop As Double
    Dim popNText As String, popN As Double, withoutReplacement As Boolean
    Dim mu0Text As String, hasMu0 As Boolean, mu0 As Double
    Dim tail As String, addr As String, shRef As String, outName As String
    Dim i As Long

    If TypeName(Selection) <> "Range" Then
        MsgBox "Highlight one numeric data range first.", vbExclamation, "SDS188 Quick Analysis"
        Exit Sub
    End If

    Set rng = Selection
    If rng.Areas.Count > 1 Then
        MsgBox "Select one contiguous range only.", vbExclamation, "SDS188 Quick Analysis"
        Exit Sub
    End If

    n = Application.WorksheetFunction.Count(rng)
    If n < 2 Then
        MsgBox "The selection must contain at least 2 numeric observations.", vbExclamation, "SDS188 Quick Analysis"
        Exit Sub
    End If

    Set wb = rng.Worksheet.Parent

    conf = Val(InputBox("Confidence level as a percentage (e.g. 95):", _
                        "SDS188 Quick Analysis", "95")) / 100
    If conf <= 0 Or conf >= 1 Then
        MsgBox "Confidence level must be between 0 and 100.", vbExclamation
        Exit Sub
    End If
    alpha = 1 - conf

    sigmaText = Trim(InputBox( _
        "If population standard deviation sigma is KNOWN, enter it." & vbCrLf & _
        "Leave blank if sigma is unknown (sample s + Student t will be used).", _
        "Population SD", ""))
    If sigmaText <> "" Then
        If Not IsNumeric(sigmaText) Or Val(sigmaText) <= 0 Then
            MsgBox "Population sigma must be a positive number.", vbExclamation
            Exit Sub
        End If
        sigmaKnown = True
        sigmaPop = CDbl(sigmaText)
    End If

    popNText = Trim(InputBox( _
        "Finite population size N (optional)." & vbCrLf & _
        "Leave blank if not relevant.", "Finite Population", ""))
    If popNText <> "" Then
        If Not IsNumeric(popNText) Or Val(popNText) <= n Then
            MsgBox "If N is supplied, it must be larger than the sample size.", vbExclamation
            Exit Sub
        End If
        popN = CDbl(popNText)
        withoutReplacement = (MsgBox( _
            "Was the sample selected WITHOUT replacement?", _
            vbYesNo + vbQuestion, "Finite Population Correction") = vbYes)
    End If

    mu0Text = Trim(InputBox( _
        "Hypothesised mean mu0 for a mean hypothesis test (optional)." & vbCrLf & _
        "Leave blank to skip the hypothesis-test section.", _
        "Hypothesis Test", ""))
    If mu0Text <> "" Then
        If Not IsNumeric(mu0Text) Then
            MsgBox "mu0 must be numeric.", vbExclamation
            Exit Sub
        End If
        hasMu0 = True
        mu0 = CDbl(mu0Text)
        tail = LCase(Trim(InputBox("Enter test direction: TWO, LOWER, or UPPER", _
                                   "Hypothesis Tail", "TWO")))
        If tail <> "two" And tail <> "lower" And tail <> "upper" Then
            MsgBox "Tail must be TWO, LOWER, or UPPER.", vbExclamation
            Exit Sub
        End If
    End If

    shRef = "'" & Replace(rng.Worksheet.Name, "'", "''") & "'!"
    addr = shRef & rng.Address(True, True, xlA1)

    outName = "SDS Analysis"
    i = 1
    Do While SheetExists(outName, wb)
        i = i + 1
        outName = "SDS Analysis " & i
    Loop

    Set ws = wb.Worksheets.Add(After:=wb.Worksheets(wb.Worksheets.Count))
    ws.Name = outName

    With ws
        .Range("A1:F1").Merge
        .Range("A1").Value = "SDS188 QUICK ANALYSIS"
        .Range("A1:F1").Interior.Color = RGB(32, 32, 32)
        .Range("A1:F1").Font.Color = RGB(255, 255, 255)
        .Range("A1:F1").Font.Bold = True
        .Range("A1:F1").Font.Size = 16

        .Range("A3:B3").Value = Array("INPUT / SETTING", "VALUE")
        .Range("A3:B3").Font.Bold = True
        .Range("A3:B3").Interior.Color = RGB(217, 217, 217)
        .Range("A4").Value = "Source range"
        .Range("B4").Value = rng.Worksheet.Name & "!" & rng.Address(False, False)
        .Range("A5").Value = "Confidence"
        .Range("B5").Value = conf
        .Range("B5").NumberFormat = "0%"
        .Range("A6").Value = "alpha"
        .Range("B6").Value = alpha
        .Range("A7").Value = "Method"
        .Range("B7").Value = IIf(sigmaKnown, "Z (sigma known)", "t (sigma unknown)")
        .Range("A8").Value = "Population sigma"
        If sigmaKnown Then .Range("B8").Value = sigmaPop
        .Range("A9").Value = "Finite N"
        If popNText <> "" Then .Range("B9").Value = popN
        .Range("A10").Value = "Without replacement?"
        .Range("B10").Value = IIf(withoutReplacement, "Yes", "No")

        .Range("A12:B12").Value = Array("DESCRIPTIVE STATISTIC", "RESULT")
        .Range("A12:B12").Font.Bold = True
        .Range("A12:B12").Interior.Color = RGB(217, 217, 217)
        .Range("A13:A28").Value = Application.Transpose(Array( _
            "n", "Mean xbar", "Median", "Mode", "Sample SD s", "Sample variance s^2", _
            "Standard error s/SQRT(n)", "Minimum", "Maximum", "Range", "Q1", "Q3", _
            "IQR", "Coefficient of variation", "Skewness", "Kurtosis"))

        .Range("B13").Formula = "=COUNT(" & addr & ")"
        .Range("B14").Formula = "=AVERAGE(" & addr & ")"
        .Range("B15").Formula = "=MEDIAN(" & addr & ")"
        .Range("B16").Formula = "=IFERROR(MODE.SNGL(" & addr & "),""No unique mode"")"
        .Range("B17").Formula = "=STDEV.S(" & addr & ")"
        .Range("B18").Formula = "=VAR.S(" & addr & ")"
        .Range("B19").Formula = "=B17/SQRT(B13)"
        .Range("B20").Formula = "=MIN(" & addr & ")"
        .Range("B21").Formula = "=MAX(" & addr & ")"
        .Range("B22").Formula = "=B21-B20"
        .Range("B23").Formula = "=QUARTILE.INC(" & addr & ",1)"
        .Range("B24").Formula = "=QUARTILE.INC(" & addr & ",3)"
        .Range("B25").Formula = "=B24-B23"
        .Range("B26").Formula = "=B17/B14"
        .Range("B27").Formula = "=SKEW(" & addr & ")"
        .Range("B28").Formula = "=KURT(" & addr & ")"
        .Range("B13:B28").NumberFormat = "0.0000"
        .Range("B26").NumberFormat = "0.00%"

        .Range("D12:F12").Merge
        .Range("D12").Value = "NORMALITY / EMPIRICAL RULE"
        .Range("D12:F12").Font.Bold = True
        .Range("D12:F12").Interior.Color = RGB(217, 217, 217)
        .Range("D13").Value = "Mean - Median"
        .Range("E13").Formula = "=B14-B15"
        .Range("D14").Value = "Observed within xbar +/- 1s"
        .Range("E14").Formula = "=COUNTIFS(" & addr & ","">=""&(B14-B17)," & addr & ",""<=""&(B14+B17))/B13"
        .Range("F14").Value = "Target 68%"
        .Range("D15").Value = "Observed within xbar +/- 2s"
        .Range("E15").Formula = "=COUNTIFS(" & addr & ","">=""&(B14-2*B17)," & addr & ",""<=""&(B14+2*B17))/B13"
        .Range("F15").Value = "Target 95%"
        .Range("D16").Value = "Observed within xbar +/- 3s"
        .Range("E16").Formula = "=COUNTIFS(" & addr & ","">=""&(B14-3*B17)," & addr & ",""<=""&(B14+3*B17))/B13"
        .Range("F16").Value = "Target 99.7%"
        .Range("E14:E16").NumberFormat = "0.0%"

        .Range("A31:C31").Merge
        .Range("A31").Value = "MEAN CONFIDENCE INTERVAL"
        .Range("A31:C31").Font.Bold = True
        .Range("A31:C31").Interior.Color = RGB(217, 217, 217)
        .Range("A32:A39").Value = Application.Transpose(Array( _
            "FPC", "SE used", "Critical value", "Margin of error", _
            "Lower limit", "Upper limit", "Interval width", "Method"))

        If withoutReplacement And popN > 0 And n / popN > 0.05 Then
            .Range("B32").Formula = "=SQRT((" & popN & "-B13)/(" & popN & "-1))"
        Else
            .Range("B32").Value = 1
        End If

        If sigmaKnown Then
            .Range("B33").Formula = "=" & sigmaPop & "/SQRT(B13)*B32"
            .Range("B34").Formula = "=NORM.S.INV(1-B6/2)"
        Else
            .Range("B33").Formula = "=B17/SQRT(B13)*B32"
            .Range("B34").Formula = "=ABS(T.INV(B6/2,B13-1))"
        End If
        .Range("B35").Formula = "=B33*B34"
        .Range("B36").Formula = "=B14-B35"
        .Range("B37").Formula = "=B14+B35"
        .Range("B38").Formula = "=B37-B36"
        .Range("B39").Value = IIf(sigmaKnown, "Z", "Student t")
        .Range("B32:B38").NumberFormat = "0.0000"

        If hasMu0 Then
            .Range("D31:F31").Merge
            .Range("D31").Value = "MEAN HYPOTHESIS TEST"
            .Range("D31:F31").Font.Bold = True
            .Range("D31:F31").Interior.Color = RGB(217, 217, 217)
            .Range("D32:D40").Value = Application.Transpose(Array( _
                "mu0", "Tail", "Test statistic", "Lower critical", "Upper critical", _
                "p-value", "alpha", "Decision", "Reminder"))
            .Range("E32").Value = mu0
            .Range("E33").Value = UCase(tail)
            .Range("E34").Formula = "=(B14-E32)/B33"

            If sigmaKnown Then
                If tail = "two" Then
                    .Range("E35").Formula = "=NORM.S.INV(B6/2)"
                    .Range("E36").Formula = "=NORM.S.INV(1-B6/2)"
                    .Range("E37").Formula = "=(1-NORM.S.DIST(ABS(E34),TRUE))*2"
                ElseIf tail = "lower" Then
                    .Range("E35").Formula = "=NORM.S.INV(B6)"
                    .Range("E36").Value = ""
                    .Range("E37").Formula = "=NORM.S.DIST(E34,TRUE)"
                Else
                    .Range("E35").Value = ""
                    .Range("E36").Formula = "=NORM.S.INV(1-B6)"
                    .Range("E37").Formula = "=1-NORM.S.DIST(E34,TRUE)"
                End If
            Else
                If tail = "two" Then
                    .Range("E35").Formula = "=T.INV(B6/2,B13-1)"
                    .Range("E36").Formula = "=T.INV(1-B6/2,B13-1)"
                    .Range("E37").Formula = "=T.DIST.2T(ABS(E34),B13-1)"
                ElseIf tail = "lower" Then
                    .Range("E35").Formula = "=T.INV(B6,B13-1)"
                    .Range("E36").Value = ""
                    .Range("E37").Formula = "=T.DIST(E34,B13-1,TRUE)"
                Else
                    .Range("E35").Value = ""
                    .Range("E36").Formula = "=T.INV(1-B6,B13-1)"
                    .Range("E37").Formula = "=1-T.DIST(E34,B13-1,TRUE)"
                End If
            End If

            .Range("E38").Value = alpha
            .Range("E39").Formula = "=IF(E37<E38,""REJECT H0"",""DO NOT REJECT H0"")"
            .Range("E40").Value = "Do not write 'accept H0'."
            .Range("E34:E38").NumberFormat = "0.0000"
        End If

        .Columns("A:F").AutoFit
        .Columns("A").ColumnWidth = 28
        .Columns("D").ColumnWidth = 28
        .Columns("F").ColumnWidth = 20
        .Range("A1:F45").WrapText = True
    End With

    ws.Activate
    ws.Range("A1").Select
    MsgBox "Done — " & outName & " has been created.", vbInformation, "SDS188 Quick Analysis"
End Sub

Private Function SheetExists(ByVal sheetName As String, ByVal wb As Workbook) As Boolean
    Dim sh As Worksheet
    On Error Resume Next
    Set sh = wb.Worksheets(sheetName)
    SheetExists = Not sh Is Nothing
    Set sh = Nothing
    On Error GoTo 0
End Function
