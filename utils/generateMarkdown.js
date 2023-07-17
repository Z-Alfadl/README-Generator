// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return
  } else {
    //return license badge
    return `![License](https://img.shields.io/badge/License-${license})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return
  } else {
    //return license link
    return `[${license}](http://choosealicense.com/licenses/${license})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return
  } else {
    renderLicenseBadge(license)
    renderLicenseLink(license)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contribution, credits, tests, license}
  ) {
  var markdown = `# ${title}
## Description
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#Usage)
- [Contribution](#contribution)
- [Credits](#Credits)
- [Tests](#tests)
- [](#)
## Installation
${installation}.
## Usage
  ${usage}
  `;
  if (contribution) {
    var contribute= `## How to Contribute
    ${contribution}`
    markdown += contribute
  }
  if (credits) {
    var credit = 
    `## With special thanks to:
  ${credits}`
  markdown += credit
  }
  if (tests) {
    var test = `## Tests
  ${tests}`
  markdown += test
  }
  if (license) {
   var licenses =`## Licenses
${renderLicenseSection(license)}`
    markdown += licenses
  }
  return markdown
}

module.exports = generateMarkdown;
