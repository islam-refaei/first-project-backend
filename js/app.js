const yargs = require("yargs");

const opFile = require("./opFile"); // call opretion file

yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    id: {
      describe: "id of the user",
      demandOption: true,
      type: "number",
    },
    fname: {
      describe: "this is the first name for user",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name for user",
      demandOption: true,
      type: "string",
    },
    age: {
      describe: "age of the user",
      demandOption: true,
      type: "number",
    },
    city: {
      describe: "city of the user",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    opFile.addPerson(x.fname, x.lname, x.age, x.id, x.city);
    // console.log(x.fname, x.lname);
  },
});

yargs.command({
  command: "delete",
  describe: "to delete an item",
  handler: (x) => {
    opFile.deleteData(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "to read data",
  builder: {
    id: {
      describe: "this id describtion in read commend",
      demandOption: true,
      type: "number",
    },
  },
  handler: (x) => {
    opFile.readData(x.id);
  },
});

yargs.command({
  command: "list",
  describe: "to list all your data",
  handler: () => {
    opFile.listAllData();
  },
});
yargs.parse();
// console.log(yargs.argv);
//// => yargs.parse() == yargs.argv
