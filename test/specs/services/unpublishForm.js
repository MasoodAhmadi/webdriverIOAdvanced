const { screenShot } = require("../utils/fileNumbering");

function unpublishForm(variable, errorLog) {
  try {
    const { openPublishIcon, unpublisheToggle, savePublishButton } = variable;

    //Opening the form publish menu //.fa-folder-open
    $(openPublishIcon).click();
    browser.pause(5000);
    //clicking on unpublish
    $(unpublisheToggle).click();

    //saving the publish menu
    $(savePublishButton).click();

    const { formEditButton, formTabView, dependenciesButton } = variable;

    // //*[@id="editform"]/div/input[4]
    //clicking the edit button
    $(formEditButton).click();

    //clicking the form tab
    $(formTabView).click();

    //clicking the dependencies button
    $(dependenciesButton).click();
    screenShot();

    const { dependenciesSelect, dependenciesOperator } = variable;

    //selecting field selector
    $(dependenciesSelect).selectByIndex(1);

    //selecting operator selector
    $(dependenciesOperator).selectByIndex(1);

    const { dependenciesValueField, dependenciesAction } = variable;

    //adding demo value in value fieldRequiredTik
    $(dependenciesValueField).click();
    $(dependenciesValueField).addValue("Demo Name");

    //selecting action selector
    $(dependenciesAction).selectByIndex(1);

    // const { dependenciesTarget, formTabSave } = variable;
    const { dependenciesTarget, fieldSaveButton } = variable;

    //selecting target selectors
    $(dependenciesTarget).selectByIndex(4);

    //save dependencies
    $(fieldSaveButton).click();
    browser.pause(5000);
    screenShot();
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { unpublishForm };
