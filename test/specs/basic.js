require("dotenv").config();
const {
  path,
  variable,
  printPDF,
  errorLog,
  webLists,
  loginUser,
  loggingOut,
  deleteForm,
  createForm,
  openBaseUrl,
  getUserEmail,
  unpublishForm,
  publishAndFillForm,
  uploadImageAndProcess,
  handlingProcessingTask,
  processingAndInspection,
  publishFormWithUserEmail,
  printExcelAndDeleteAttatchment,
  reportPreviewAndDeleteAttachment,
} = require("./");

const listUrl = {};
const USER_EMAIL = {};
//  && allure generate allure-results/ --clean && allure open
for (let i = 0; i < webLists.length; i++) {
  let { USER_NAME, PASS_WORD, BASE_URL } = webLists[i];
  describe("Testing E-lomake form of Eduix Oy", () => {
    it("STEP:1 Opening E-lomake web address:", () => {
      openBaseUrl(BASE_URL, errorLog);
    });

    it("Step:2 should login with username & password", () => {
      loginUser(variable, errorLog, USER_NAME, PASS_WORD);
    });

    it("Step:3 should get user email", () => {
      getUserEmail(variable, errorLog, USER_EMAIL);
    });

    it("STEP:4 should create a elomake form", () => {
      createForm(variable, errorLog, listUrl);
    });

    it("STEP:5 Upload a picture and process the form", () => {
      uploadImageAndProcess(variable, errorLog, listUrl);
    });

    it("Step:6 Publish the form and filling it with some data", () => {
      publishAndFillForm(variable, errorLog, USER_EMAIL, path, listUrl);
    });

    it("STEP:7 Printing a PDF file:", () => {
      printPDF(variable, errorLog);
    });

    it("STEP:8 Report Preview and delete attachment ", () => {
      reportPreviewAndDeleteAttachment(variable, errorLog);
    });

    it("STEP9: Printing excel & Deleting the submission from report", () => {
      printExcelAndDeleteAttatchment(variable, errorLog, listUrl);
    });

    it("Step10: Unpublishing the form", () => {
      unpublishForm(variable, errorLog);
    });

    it("Step11: Processing form & inspection to other users", () => {
      processingAndInspection(variable, errorLog, USER_EMAIL, listUrl);
    });

    it("Step12: Publishing form with process of user's email address", () => {
      publishFormWithUserEmail(variable, errorLog, USER_EMAIL, path, listUrl);
    });

    it("Step13: Handling processing task field", () => {
      handlingProcessingTask(variable, errorLog);
    });

    it("Step14: Deleting Formt", () => {
      deleteForm(variable, errorLog, listUrl);
    });

    it("Step15: Logging out", () => {
      loggingOut(variable, errorLog);
    });
  });
}
