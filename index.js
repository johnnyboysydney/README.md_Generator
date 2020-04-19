
// Declaring the dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");


inquirer.prompt([
    {
        type: "input",
        name: "project title",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project"
    },
    {
        type: "checkbox",
        message: "Select the contents of your Table of Contents",
        name: "table of contents",
        choices: [
            "Project Title",
            "Description",
            "Installation",
            "Usage",
            "License",
            "Contributing",
            "Tests",
            "Questions"
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any",
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropiate license for this project",
        choices: [
            "Apache License 2.0",
            "Academic Free License v3.0",
            "GNU General Public License v3.0",
            "ISC",
            "MIT License",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "The Unlicense"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a Test included"
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue?"
    }

]).then(function(data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });



