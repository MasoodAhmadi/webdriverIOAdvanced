require("dotenv").config();

const webLists = [
  {
    id: 1,
    BASE_URL: process.env.BASE_URL_DEMO,
    USER_NAME: process.env.USER_NAME_DEMO,
    PASS_WORD: process.env.PASS_WORD_DEMO,
  },
  // {
  //   id: 2,
  //   BASE_URL: process.env.BASE_URL_LAUREA,
  //   USER_NAME: process.env.USER_NAME_LAUREA,
  //   PASS_WORD: process.env.PASS_WORD_LAUREA,
  // },
];

module.exports = { webLists };
