const { screenShot } = require("../utils/fileNumbering");

function publishAndFillForm(variable, errorLog, email, path, listUrl) {
  try {
    const { publishCheckButton, publishToggle, savePublishButton } = variable;

    //checking publish status
    $(publishCheckButton).click();
    browser.pause(5000);

    //clicking the publish toggle
    $(publishToggle).click();

    //publishing the form
    $(savePublishButton).click();
    screenShot();

    const { publishedLink } = variable;

    //opening the published form
    browser.url($(publishedLink).getAttribute("href"));
    browser.pause(2000);

    const { nameField, mobileField, addressField } = variable;
    const { emailField, birthDateField, formOriginSelect } = variable;
    const { attachmentInput } = variable;

    //filling demo name
    $(nameField).click();
    $(nameField).addValue("Demo Name");

    //filling demo phone number
    $(mobileField).click();
    $(mobileField).addValue("0465422");

    //filling demo address
    $(addressField).click();
    $(addressField).addValue("Rauhaniementie 28A");

    //filling demo email
    $(emailField).click();
    $(emailField).addValue(email.value);

    //filling demo birthday
    $(birthDateField).click();
    $(birthDateField).addValue("01.01.1995");

    //seleting Helsinki from the slector
    $(formOriginSelect).selectByIndex(1);

    const { formToggleYesOne, formToggleYesTwo } = variable;
    const { formToggleNoOne, formToggleNoTwo } = variable;

    //Clicking in the toggles
    $(formToggleYesOne).click();
    $(formToggleNoOne).click();
    $(formToggleNoTwo).click();
    $(formToggleYesTwo).click();

    // Uploading file fom the images foler
    const filePath = path.join(__dirname, "../Images/screen1.png");
    $(attachmentInput).addValue(filePath);
    screenShot();
    browser.pause(5000);

    const { tableValueOne, tableValueTwo } = variable;
    const { checkBoxYes, scaleZeroToThree, publishFormSaveButton } = variable;

    //adding values one in table box
    $(tableValueOne).click();
    $(tableValueOne).addValue("Its monday");

    //adding values two in table box
    $(tableValueTwo).click();
    $(tableValueTwo).addValue("It's tuesday");

    screenShot();

    //Clicking on checkBox as Yes
    $(checkBoxYes).click();

    //Scale the VAS zero to three
    $(scaleZeroToThree).click();

    // Saving the publlished form
    $(publishFormSaveButton).click();
    browser.pause(5000);
    screenShot();
    browser.url(listUrl.url);
    screenShot();
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { publishAndFillForm };
