function errorLog(e) {
  console.log("Your error", e);
  console.log("Your error message", e.message);
}

module.exports = { errorLog };
