// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title};
  
Description
${data.title};


Table of Contents (Optional)
If your README is very long, add a table of contents to make it easy for users to find what they need.

Installation
${data.Installation};

Usage
${data.Usage};

Credits
${data.Credits};

License
${data.License};


🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

Badges
badmath

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time.

Contributing
If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own.

Tests
Go the extra mile and write tests for your application. Then provide examples on how to run them.

`;
}

module.exports = generateMarkdown;
