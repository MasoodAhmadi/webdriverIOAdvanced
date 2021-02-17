const { screenShot } = require("../utils/fileNumbering");

function deleteForm(variable, errorLog, listUrl) {
  try {
    const { deleteToggleButton, deleteButton, firstFormElement } = variable;

    //Opening form page
    browser.url(listUrl.url);

    // Clicking the form drop down button
    $(firstFormElement).click();

    // Opening toggle list
    $(deleteToggleButton).click();
    screenShot();

    // Choosing delete and click the delete button
    $(deleteButton).click();

    //  Acceting the alert
    browser.acceptAlert();
    browser.pause(5000);
  } catch (e) {
    errorLog(e);
  }
}
module.exports = { deleteForm };
