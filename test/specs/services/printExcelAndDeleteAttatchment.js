const { screenShot } = require("../utils/fileNumbering");

function printExcelAndDeleteAttatchment(variable, errorLog, listUrl) {
  try {
    const { reportRemoveButton, printExcelFileButton } = variable;

    //printing excel file button
    $(printExcelFileButton).click();
    browser.pause(5000);
    //Deleting a report
    $(reportRemoveButton).click();
    browser.acceptAlert();
    browser.pause(5000);
    screenShot();
    browser.url(listUrl.url);
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { printExcelAndDeleteAttatchment };
