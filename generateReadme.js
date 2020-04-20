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
        
        ### GitHub Username
        ${answers.email}

        ### Avatar Image
        ${answers.avatar_url}

        Copyright 2020 &copy;
    `;
  }
  module.exports = generateReadme;