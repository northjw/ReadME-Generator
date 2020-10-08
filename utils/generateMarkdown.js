// function to generate markdown for README
function generateMarkdown(data) {
   `### Welcome to my ${data.title}
  
#--- Description ---#
${data.title};


#--- Table of Contents ---#
If your README is very long, add a table of contents to make it easy for users to find what they need.

*Installation
${data.Installation};

*Usage
${data.Usage};

*Credits
${data.Credits};

*License
${data.License};




 #--- Badges ---#
  ![badmath](https://img.shields.io/badge/license-${data.license}-green)



#--- Tests ---#

  ${data.test_instruct}

`;
}

module.exports = generateMarkdown;
