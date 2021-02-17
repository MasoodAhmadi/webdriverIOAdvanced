const { screenShot } = require("../utils/fileNumbering");

function printPDF(variable, errorLog) {
  try {
    const { openReportButton, reportEditButton, reportCreatePDF } = variable;

    //Clicking the open report button
    $(openReportButton).click();

    //Clicking report edit button
    $(reportEditButton).click();

    //Click the create pdf button
    $(reportCreatePDF).click();
    browser.pause(5000);
    screenShot();
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { printPDF };
