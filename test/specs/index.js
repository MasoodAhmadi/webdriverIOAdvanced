const {
  reportPreviewAndDeleteAttachment,
} = require("./services/reportPreviewAndDeleteAttachment");

const {
  printExcelAndDeleteAttatchment,
} = require("./services/printExcelAndDeleteAttatchment");

const {
  processingAndInspection,
} = require("./services/processingAndInspection");

const {
  publishFormWithUserEmail,
} = require("./services/publishFormWithUserEmail");

const { webLists } = require("./webLists");
const { errorLog } = require("./utils/errorLog");
const { printPDF } = require("./services/printPDF");
const { loginUser } = require("./services/loginUser");
const { loggingOut } = require("./services/logginOut");
const { createForm } = require("./services/createForm");
const { deleteForm } = require("./services/deleteForm");
const { openBaseUrl } = require("./services/openBaseurl");
const { getUserEmail } = require("./services/getUserEmail");
const { unpublishForm } = require("./services/unpublishForm");
const { publishAndFillForm } = require("./services/publishAndFillForm");
const { uploadImageAndProcess } = require("./services/uploadImgProcess");
const { handlingProcessingTask } = require("./services/handlingProcessingTask");

module.exports = {
  printPDF,
  errorLog,
  webLists,
  loginUser,
  deleteForm,
  createForm,
  loggingOut,
  openBaseUrl,
  getUserEmail,
  unpublishForm,
  publishAndFillForm,
  path: require("path"),
  uploadImageAndProcess,
  handlingProcessingTask,
  processingAndInspection,
  publishFormWithUserEmail,
  printExcelAndDeleteAttatchment,
  reportPreviewAndDeleteAttachment,
  variable: require("../../config.json"),
};
