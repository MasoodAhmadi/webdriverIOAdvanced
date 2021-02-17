let index = 1;

function screenShot() {
  browser.saveScreenshot(`./Images/screen${index}.png`);
  index++;
}

module.exports = { screenShot };
