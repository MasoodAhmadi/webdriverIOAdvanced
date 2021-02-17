const { screenShot } = require("../utils/fileNumbering");

function reportPreviewAndDeleteAttachment(variable, errorLog) {
  try {
    const { removeAttacthmentButton, reportFormNameTab } = variable;
    const { editAddressField, editMobileField, editReportSave } = variable;

    //removing an attacthment
    $(removeAttacthmentButton).click();
    browser.acceptAlert();

    //editing the address field
    $(editAddressField).click();
    $(editAddressField).clearValue();
    $(editAddressField).addValue("Finlaysonin Kuja");

    //editing the mobile field
    $(editMobileField).click();
    $(editMobileField).clearValue();
    $(editMobileField).addValue("0451516377");

    //saving the form
    $(editReportSave).click();
    browser.pause(2000);
    screenShot();

    //Moving to form report page
    browser.url($(reportFormNameTab).getAttribute("href"));
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { reportPreviewAndDeleteAttachment };
