// function to generate markdown for README
function generateMarkdown(data) {
   console.log(data)
     return (`# ${data.title}
     ![badmath](https://img.shields.io/badge/license-${data.license}-green)
   ### Welcome to my ${data.title}
  
#--- Description ---#
${data.title};


#--- Table of Contents ---#
If your README is very long, add a table of contents to make it easy for users to find what they need.

*Installation
${data.installationInstructions};

*Usage
${data.usage};

*Credits
${data.credits};

*License
${data.license};




 #--- Badges ---#
  ![badmath](https://img.shields.io/badge/license-${data.license}-green)



#--- Tests ---#

  ${data.test_instruct}

`);
}

module.exports = generateMarkdown;
