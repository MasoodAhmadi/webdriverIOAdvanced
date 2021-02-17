const { screenShot } = require("../utils/fileNumbering");

function createForm(variable, errorLog, listUrl) {
  try {
    const { createFormButton, textFieldButton, headerText } = variable;
    const { fieldRequiredTik, newGroupField, fieldSaveButton } = variable;

    //creating a new form
    $(createFormButton).click();

    //cofirming of create a form
    browser.acceptAlert();
    screenShot();

    //clicking text field button
    $(textFieldButton).click();

    //adding Name text field
    $(headerText).click();
    $(headerText).addValue("Name: ");

    //making Tik
    $(fieldRequiredTik).click();

    //adding Information group
    $(newGroupField).click();
    $(newGroupField).addValue("Information");

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    //adding Mobile text field
    $(headerText).click();
    $(headerText).addValue("Mobile: ");

    const { selectVerification } = variable;

    //selecting number verification
    $(selectVerification).selectByIndex(5);

    //making Tik
    $(fieldRequiredTik).click();

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    //adding address text field
    $(headerText).click();
    $(headerText).addValue("Address: ");

    //making Tik
    $(fieldRequiredTik).click();

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    const { selectFunction } = variable;

    //adding email text field
    $(headerText).click();
    $(headerText).addValue("Email: ");

    //selecting email address verification
    $(selectVerification).selectByIndex(12);

    //selecting recipient from functions
    $(selectFunction).selectByIndex(1);

    //making Tik
    $(fieldRequiredTik).click();

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    //adding birthday text field
    $(headerText).click();
    $(headerText).addValue("Date of Birth: ");

    //selecting birthday verification
    $(selectVerification).selectByIndex(10);

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    //clicking drop-down-menu icon
    const { dropDownMenuButton } = variable;
    $(dropDownMenuButton).click();

    //adding origin text field
    $(headerText).click();
    $(headerText).addValue("Origin: ");

    const { newOptionFieldOne, newOptionFieldTwo } = variable;

    //Filling first field
    $(newOptionFieldOne).click();
    $(newOptionFieldOne).addValue("Tampere");

    //Filling second field
    $(newOptionFieldTwo).click();
    $(newOptionFieldTwo).addValue("Helsinki");

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    const { radioButton } = variable;

    //clicking radio button icon
    $(radioButton).click();

    //adding radio text field
    $(headerText).click();
    $(headerText).addValue("mark yes/no: ");

    const { addRowButton, rowFieldOne, rowFieldTwo } = variable;

    //Adding new row
    $(addRowButton).click();

    $(rowFieldOne).click();
    $(rowFieldOne).addValue("Is the class on time?");

    $(rowFieldTwo).click();
    $(rowFieldTwo).addValue("are you satisfied with your study?");

    const { visibleValueFieldOne, visibleValueFieldTwo } = variable;

    //filling visible value first field
    $(visibleValueFieldOne).click();
    $(visibleValueFieldOne).addValue("yes");

    //filling visible value second field
    $(visibleValueFieldTwo).click();
    $(visibleValueFieldTwo).addValue("no");

    const { adjacentTableButton, addTableButton } = variable;

    //clicking the adjacent table button
    $(adjacentTableButton).click();
    browser.pause(2000);

    //creating four table
    $(addTableButton).click();
    $(addTableButton).click();
    $(addTableButton).click();
    $(addTableButton).click();

    const { tableFieldOne, tableFieldTwo } = variable;
    const { tableFieldThree, tableFieldFour } = variable;

    // Adding values in field one
    $(tableFieldOne).click();
    $(tableFieldOne).addValue("New Feild");

    // Adding values in field two
    $(tableFieldTwo).click();
    $(tableFieldTwo).addValue("New Feild");

    // Adding values in field three
    $(tableFieldThree).click();
    $(tableFieldThree).addValue("Choose");

    // Adding values in field four
    $(tableFieldFour).click();
    $(tableFieldFour).addValue("Choose");
    screenShot();

    const { selectFieldGroup, attachmentButton } = variable;

    //select field group recipient
    $(selectFieldGroup).selectByIndex(0);

    //adding tick mark group
    $(newGroupField).click();
    $(newGroupField).addValue("tick mark");

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    //clicking attachment button
    $(attachmentButton).click();

    //adding attachment text field
    $(headerText).click();
    $(headerText).addValue("Attachment: ");

    const { extraSettingsButton, helpTextField } = variable;

    //opening extra settings
    $(extraSettingsButton).click();

    //adding pdf only in help text field
    $(helpTextField).click();
    $(helpTextField).addValue("PDF only");

    //adding tick mark group
    $(newGroupField).click();
    $(newGroupField).addValue("attachment");

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    const { textFieldTableButton, addColumnButton } = variable;
    const { columnFieldOne, columnFieldTwo, newColumnButton } = variable;

    //clicking text field button icon
    $(textFieldTableButton).click();

    //adding table text field
    $(headerText).click();
    $(headerText).addValue("Table: ");

    //adding a column
    $(addColumnButton).click();

    //Filling first column field
    $(columnFieldOne).click();
    $(columnFieldOne).addValue("Monday");

    //Filling two column field
    $(columnFieldTwo).click();
    $(columnFieldTwo).addValue("Tuesday");

    //Adding new column
    $(newColumnButton).click();

    const { addedColumnRowOne, addedColumnRowTwo } = variable;

    //Filling one column row field
    $(addedColumnRowOne).click();
    $(addedColumnRowOne).addValue("Week 1");

    //Filling one column row field
    $(addedColumnRowTwo).click();
    $(addedColumnRowTwo).addValue("Week 2");

    //adding tick mark group
    $(newGroupField).click();
    $(newGroupField).addValue("table");

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    const { checkBoxButton } = variable;

    //clicking check box icon button
    $(checkBoxButton).click();

    //adding checkbox text field
    $(headerText).click();
    $(headerText).addValue("Check");

    const { newSelectionFieldOne, newSelectionFieldTwo } = variable;

    //adding Yes to new selection one
    $(newSelectionFieldOne).click();
    $(newSelectionFieldOne).addValue("Yes");

    //adding No to new selection two
    $(newSelectionFieldTwo).click();
    $(newSelectionFieldTwo).addValue("No");

    const { selectionMinimumField, checkBoxValue } = variable;

    //adding 1 to new selection minimum field
    $(selectionMinimumField).click();
    $(selectionMinimumField).addValue("1");

    //adding capital X in check box value
    $(checkBoxValue).click();
    $(checkBoxValue).clearValue();
    $(checkBoxValue).addValue("X");

    //adding check tick group
    $(newGroupField).click();
    $(newGroupField).addValue("Check Tick Box");

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    const { vasFieldButton, toggleNumericalFive } = variable;

    //Clicking VAS field
    $(vasFieldButton).click();

    //adding scale text field
    $(headerText).click();
    $(headerText).addValue("Scale");

    //set field required
    $(fieldRequiredTik).click();

    //toggle numerical 5 values
    $(toggleNumericalFive).click();

    //adding scale points group
    $(newGroupField).click();
    $(newGroupField).addValue("Points");

    //save Text Field
    $(fieldSaveButton).click();
    screenShot();

    //return to FormListPage
    const { formTabSet } = variable;
    screenShot();
    listUrl.url = $(formTabSet).getAttribute("href");
    screenShot();
  } catch (e) {
    errorLog(e);
  }
}

module.exports = { createForm };
