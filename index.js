
// Declaring the dependencies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
//const createReadMe = require('./createReadMe');

// 
function promtUser(){
    inquirer.prompt([
        {type: "input",
        message: "Enter the project title",
        name: "title",
        },
        {type: "input",
        message: "Enter the project description",
        name: "description",
        },
        {type: "input",
        message: "Enter licence type",
        name: "licence",
        },
        {type: "input",
        message: "Enter the names of the contributing people to the project",
        name: "contruibuiting",
        },
        {type: "input",
        message: "Enter your GitHub username",
        name: "username",
        }
        {type: "input",
        message: "Enter the tests performed",
        name: "tests",
        }
    ])
    .then(function(res){
        const htmlBoiler = ` 
        <html>
        <head>
        </head>
        <body>
        <p>Your name: ${res.name} </p>
        <p>Your current location: ${res.location} </p>
        <p>LinkedIn: ${res.linkedin} </p>
        <p>Github: ${res.github} </p>
        </body>
        </html>
        `
        fs.appendFile('index.html', htmlBoiler, function (err) {
            if (err) throw err;
        });
    })
}

promtUser();


//AS A developer

//I WANT a README generator

//SO THAT I can easily put together a good README for a new project

