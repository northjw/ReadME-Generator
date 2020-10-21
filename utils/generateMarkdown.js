// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return (`# ${data.title}
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

    # Welcome to the ${data.title}'s Project Page! : 
    ## Description
      ${data.desc}
    ## Table of Contents
    Navigate through the README Using the Table of Contents : 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributing)
    * [Badges](#badges)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
      ${data.instructions}
    ## Usage
      ${data.usage}
    ## License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    ${data.license}
    ## Contributing
    ${data.contributors}
    
    ## Tests
    ${data.test_instruct}
    ## Questions
    Github: (https://github.com/${data.github_name})
    For any questions about this project please contact <${data.email}> 
    `)
}

module.exports = generateMarkdown;