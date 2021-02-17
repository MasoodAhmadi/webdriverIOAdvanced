const { screenShot } = require("../utils/fileNumbering");

function processingAndInspection(variable, errorLog, email, listUrl) {
  try {
    const { submissionProcessingButton, physicalProcessingToggle } = variable;

    //clicking submission processing button
    $(submissionProcessingButton).click();

    //clicking on physical process toggle
    $(physicalProcessingToggle).click();

    const { fieldSaveButton, proceedButton, addNewPhaseButton } = variable;

    //Saving the process
    $(fieldSaveButton).click();

    //click on the proceed button
    $(proceedButton).click();

    //clicking on add new processing phase button
    $(addNewPhaseButton).click();

    const { processNameField } = variable;

    //adding phase name
    $(processNameField).click();
    $(processNameField).clearValue();
    $(processNameField).addValue("Phase 1");

    const { processInformationToggle, processTickMarkToggle } = variable;
    const { processAttachmentToggle, processTableToggle } = variable;
    const { processCheckTickBoxToggle, processPointsToggle } = variable;

    //Clicking information, tick mark, attachment, table, check tick box & points toggle
    $(processInformationToggle).click();
    $(processTickMarkToggle).click();
    $(processAttachmentToggle).click();
    $(processTableToggle).click();
    $(processCheckTickBoxToggle).click();
    $(processPointsToggle).click();

    const { selectProcessUser } = variable;
    const { selectProcessorsField, emailToNewTaskTick } = variable;
    const { messageProcessorsField, saveProcessChangesButton } = variable;

    //assigning demo email to select processors field
    $(selectProcessorsField).click();
    $(selectProcessorsField).addValue(email.value);
    $(selectProcessUser).click();

    //clicking email the new task to the processors tick
    $(emailToNewTaskTick).click();

    //adding value to the message processors fi
    $(messageProcessorsField).click();
    $(messageProcessorsField).addValue("Please have a look at your new task");

    //saving all the changes
    $(saveProcessChangesButton).click();
    screenShot();
    browser.pause(5000);
    browser.url(listUrl.url);
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { processingAndInspection };
