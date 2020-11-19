// function to generate markdown for README
function generateMarkdown(data) {
  //  console.log(data)
     return (
    
   `<h1>Read Me Generator </h1>

   ## Project Name ##
   ${data.title}
   <br />

##  Description  ##
${data.description}
<br />


##  Table of Contents  ##

- [Description](#description)<br />
- [Installation](#installation)<br />
- [Usage](#usage)<br />
- [License](#license)<br />
- [Contributing](#contributing)<br />
- [Tests](#tests)<br />
- [Questions](#questions)<br />


## Description ##
    ${data.description}
## Installation ##
    ${data.installationInstructions}
 ##  Usage ##
    ${data.usage}
  ##  License ##
  This application is covered by the ${data.license} license;
  ![badge](https://img.shields.io/badge/license-${data.license}-green)
  
  ##  Contributors ##
  ${data.contributors}
 
## Tests  ##
${data.test}
  <br />

 ##  Questions  ## 
 GitHub: [${data.github}](https://github.com/${data.github}) <br />
<br />
 For any questions about this project please contact: ${data.email} <br /><br />

`);
}

module.exports = generateMarkdown;
