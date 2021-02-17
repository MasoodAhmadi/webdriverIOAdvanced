function openBaseUrl(url, errorLog) {
  try {
    browser.maximizeWindow();
    browser.url(url);
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { openBaseUrl };
