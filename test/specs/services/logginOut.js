const { screenShot } = require("../utils/fileNumbering");

function loggingOut(variable, errorLog) {
  try {
    const { checkingDropDownMenu, logOutButton } = variable;

    //clicking user's name to check drop down list
    $(checkingDropDownMenu).click();

    //logging out
    $(logOutButton).click();
    browser.pause(5000);
    screenShot();
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { loggingOut };
