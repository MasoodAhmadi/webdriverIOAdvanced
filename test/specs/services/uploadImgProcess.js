const { screenShot } = require("../utils/fileNumbering");

function uploadImageAndProcess(variable, errorLog, listUrl) {
  try {
    const { formButton, formTextButton, formHeader } = variable;

    //clicking the form button
    $(formButton).click();

    //clicking form text button
    $(formTextButton).click();

    //adding header
    $(formHeader).click();
    $(formHeader).clearValue();
    $(formHeader).addValue("Webdriver IO test form");

    const { imageField, imageSourceInput, imageSource } = variable;
    const { imageDescriptionField, saveImage, formSaveButton } = variable;

    //clicking on image field and adding value
    $(imageField).click();
    $(imageSourceInput).click();
    $(imageSourceInput).addValue(imageSource);

    //adding image description
    $(imageDescriptionField).click();
    $(imageDescriptionField).addValue("Form image example");

    $(saveImage).click();
    screenShot();

    //Saving Form Text Section
    $(formSaveButton).click();

    const { feedbackButton, paragaraphField, iframeElement } = variable;

    //Clicking feedback button
    $(feedbackButton).click();

    //there are two box of frame for giving feedback (0,1), so next one as number: (1)
    browser.switchToFrame(1);

    //adding text to paragaraph
    $(iframeElement).click();
    $(iframeElement).addValue("Thank you for submission");
    //switched back to parent frame as we set before to 1
    browser.switchToParentFrame();

    //Save feedback section
    $(formSaveButton).click();

    //Moving to list page
    browser.url(listUrl.url);
    screenShot();
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { uploadImageAndProcess };
