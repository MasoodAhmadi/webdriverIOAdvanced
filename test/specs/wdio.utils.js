function errorLog(e) {
  console.log("Your error", e);
  console.log("Your error message", e.message);
}

function addInput(path, value) {
  $(path).click();
  $(path).addValue(value);
}

function editInput(path, value) {
  $(path).click();
  $(path).clearValue();
  $(path).addValue(value);
}

module.exports = { errorLog, addInput, editInput };
