async function loginUser(variable, errorLog, username, password) {
  try {
    const { usernameField, passwordField, loginButton, sirryButton } = variable;
    const url = browser.getUrl();
    //clicking user name field and adding user name
    if (url === process.env.BASE_URL_DEMO) {
      // Clicking sirry button
      $(sirryButton).click();

      // clicking uernamne field
      $(usernameField).click();
      $(usernameField).addValue(username);

      //clicking password field and adding password
      $(passwordField).click();
      $(passwordField).addValue(password);

      //clicking the login button
      $(loginButton).click();
      return true;
    } else {
      $(usernameField).click();
      $(usernameField).addValue(username);

      //clicking password field and adding password
      $(passwordField).click();
      $(passwordField).addValue(password);

      //clicking the login button
      $(loginButton).click();
    }
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { loginUser };
