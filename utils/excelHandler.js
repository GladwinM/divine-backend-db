import ExcelJS from 'exceljs';

export const parseExcel = async (filePath) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet(1); // First sheet
    const data = [];

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber >= 3) { // Start from row 3 to skip any headers above
            const question = row.getCell('D').value;
            let answer = row.getCell('E').value;

            // If answer is richText (check for the richText property)
            if (answer && answer.richText) {
                // Extract only the text content from richText objects
                answer = answer.richText.map(part => part.text).join(''); // Combine text parts
            }

            data.push({
                question: question,
                answer: answer
            });
        }
    });

    return data;
};
