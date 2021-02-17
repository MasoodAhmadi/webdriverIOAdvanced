const { screenShot } = require("../utils/fileNumbering");

function handlingProcessingTask(variable, errorLog) {
  try {
    const { routeToHomePage, processingTaskButton } = variable;

    //moving form list to home page
    $(routeToHomePage).click();

    //clicking processing task button
    $(processingTaskButton).click();

    const { processSubmissionButton, approveAndPrintPDFbutton } = variable;
    const { createPDFbutton } = variable;

    //clicking process submission button
    $(processSubmissionButton).click();

    //approving the task and printing the PDF
    $(approveAndPrintPDFbutton).click();
    browser.acceptAlert();
    $(createPDFbutton).click();
    screenShot();
    browser.pause(5000);

    //rotue to home page
    $(routeToHomePage).click();
    screenShot();
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { handlingProcessingTask };
