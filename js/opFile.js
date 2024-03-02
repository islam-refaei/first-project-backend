const fs = require("fs");
// import file system from the module core of the node
const addPerson = (fname, lname, age, id, city) => {
  // load file of the data customer
  const allData = loadData();
  // check if there is dublicated data between data users
  const dublicatedData = allData.filter((obj) => {
    return obj.id == id;
  });

  if (dublicatedData.length == 0) {
    // push the new user data
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });
    // save the new file after pushing
    saveAllDataJson(allData);
    // message to tell user that data saved
    console.log("adding new user done");
  } else {
    // message if there is dublicated data
    console.log("there is Error dublicated data");
  }
};

// function to load data as objects can be enabled to edit
const loadData = () => {
  try {
    const DataObject = fs.readFileSync("data20.json").toString();
    return JSON.parse(DataObject);
  } catch {
    return [];
  }
};

// function to save data as a json file
const saveAllDataJson = (allData) => {
  const DataJson = JSON.stringify(allData);
  fs.writeFileSync("data20.json", DataJson);
};

//function to delete user by its id
const deleteData = (id) => {
  const allData = loadData();
  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id;
  });
  // console.log(dataToKeep);
  saveAllDataJson(dataToKeep);
  // message to tell the user that data has been deleted
  console.log("delete the user done");
};

//function to read data and search to the user you need by id
const readData = (id) => {
  const allData = loadData();
  const itamNeeded = allData.find((obj) => {
    return obj.id == id;
  });
  // console.log(itamNeeded);
  if (itamNeeded) {
    console.log(
      "A user with ID",
      itamNeeded.id,
      "exists with name =",
      itamNeeded.fname
    );
  } else {
    console.log("A user with ID", id, "not exists");
  }
};

//function to list all data
const listAllData = () => {
  const allData = loadData();
  allData.forEach((obj) => {
    console.log("Name =", obj.fname, "Age =", obj.age, "City =", obj.city);
  });
};
// export the main functions so  we can call them
module.exports = {
  addPerson,
  deleteData,
  readData,
  listAllData,
};
