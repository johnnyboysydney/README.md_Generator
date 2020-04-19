
// Declaring the dependencies

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
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
            name: "tableOfContents",
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
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
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
            name: "acknowledgments",
            message: "Is anyone to be acknowledge?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue?"
        } 
    ]);
} 

function generateReadme(answers) {
    return `
        # README.md_Generator
        Using Node.js, generate a template README.md file with users input to generate the README.

        ${answers.projectTitle}
        
        ## Description    
        ${answers.description}
        
        ## Table of Content
        ${answers.tableOfContents}
        
        ### Installation
        ${answers.installation}

        ### Usage
        ${answers.usage}

        ### Built With
        * [VScode](https://code.visualstudio.com/) - The editor of choice
        * [Notepad++](https://notepad-plus-plus.org/) - My second editor
        * [Gitbash](https://gitforwindows.org/) - What would we do without our bash?

        ### Questions
        ${answers.questions}
        
        ### License${answers.license}

        ### Contributors
        ${answers.contributing}

        ### Acknowledgments

        #### Badges
        [![https://nodei.co/npm/${answers.projectTitle}.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/${answers.projectTitle}.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/${answers.projectTitle})
        
        Copyright 2020 &copy;
    `;
  }

  async function init() {
   
    try {
      const answers = await promptUser();
  
      const generateContent = generateReadme(answers);
  
      await writeFileAsync("README.md", generateContent);
  
      console.log("Successfully wrote to README.md");
    } catch(err) {
      console.log(err);
    }
  }
  
  init();
  