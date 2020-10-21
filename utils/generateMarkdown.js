// function to generate markdown for README
function generateMarkdown(data) {
  //  console.log(data)
     return (
    
   `<h1>Read Me Generator </h1>

   <h3>Project Name</h3>
   ${data.title}
   <br />

<h3>#--- Description ---#</h3>
${data.description}
<br />


<h3>#--- Table of Contents ---#</h3>

- [Description](#description)<br />
- [Installation](#installation)<br />
- [Usage](#usage)<br />
- [License](#license)<br />
- [Contributing](#contributing)<br />
- [Tests](#tests)<br />
- [Questions](#questions)<br />


<h3>## Description</h3>
    ${data.description}
<h3>## Installation</h3>
    ${data.installationInstructions}
 <h3> ## Usage</h3>
    ${data.usage}
  <h3>## License</h3>
  This application is covered by the ${data.license} license;
  ![badge](https://img.shields.io/badge/license-${data.license}-green)
  
  <h3>## Contributors</h3>
  ${data.contributors}
 
<h3>#--- Tests ---#</h3>
${data.test_instruct}
  <br />

 <h3>#--- Questions ---#</h3> 
 GitHub: [${data.github}](https://github.com/${data.github})<br />
<br />
 For any questions about this project please contact: ${data.email}<br /><br />

`);
}

module.exports = generateMarkdown;
