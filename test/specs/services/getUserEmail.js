const { screenShot } = require("../utils/fileNumbering");

function getUserEmail(variable, errorLog, USER_EMAIL) {
  try {
    const homeUrl = browser.getUrl();
    const { userProfileButton, emailInputField } = variable;

    // Clicking user profile button
    $(userProfileButton).click();

    //getting user email
    USER_EMAIL.value = $(emailInputField).getValue();
    screenShot();
    //Opening home url page
    browser.url(homeUrl);
  } catch (e) {
    errorLog(e);
  }
}
module.exports = { getUserEmail };
