package com.example.paddyLiveTracking.service;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddressList;
import org.apache.poi.xssf.usermodel.XSSFDataValidationHelper;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;

@Service
public class ExcelTemplateService {

    public ResponseEntity<ByteArrayResource> generateUserTemplate(Map<String, Long> societyNameToIdMap) throws IOException {
        XSSFWorkbook workbook = new XSSFWorkbook();

        // Create "Users" sheet with headers
        XSSFSheet  usersSheet = workbook.createSheet("Users");
        Row headerRow = usersSheet.createRow(0);
        String[] headers = { "userName", "societyName", "role", "ppcId", "password" };
        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
        }

        // Create "SocietyList" sheet for society names (dropdown values)
        XSSFSheet  societySheet = workbook.createSheet("SocietyList");
        int rowIndex = 0;
        for (String societyName : societyNameToIdMap.keySet()) {
            Row row = societySheet.createRow(rowIndex++);
            row.createCell(0).setCellValue(societyName);
        }

        // Set data validation for societyName dropdown in "Users" sheet
        Name societyRange = workbook.createName();
        societyRange.setNameName("SocietyNames");
        societyRange.setRefersToFormula("SocietyList!$A$1:$A$" + societyNameToIdMap.size());

        DataValidationHelper validationHelper = new XSSFDataValidationHelper(usersSheet);
        DataValidationConstraint constraint = validationHelper.createFormulaListConstraint("SocietyNames");
        CellRangeAddressList addressList = new CellRangeAddressList(1, 1000, 1, 1); // For cells in the "societyName" column
        DataValidation validation = validationHelper.createValidation(constraint, addressList);
        validation.setShowErrorBox(true);
        usersSheet.addValidationData(validation);

        // Autosize columns
        for (int i = 0; i < headers.length; i++) {
            usersSheet.autoSizeColumn(i);
        }

        // Hide the "SocietyList" sheet to keep the template clean
        workbook.setSheetHidden(workbook.getSheetIndex("SocietyList"), true);

        // Write workbook to a byte array
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        workbook.write(outputStream);
        workbook.close();

        ByteArrayResource resource = new ByteArrayResource(outputStream.toByteArray());

        // Set up response headers for file download
        HttpHeaders headersResponse = new HttpHeaders();
        headersResponse.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=UserTemplateWithSocietyDropdown.xlsx");

        return ResponseEntity.ok()
                .headers(headersResponse)
                .contentLength(resource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .body(resource);
    }
}
