// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return
  } else {
    //return license badge
    // console.log(`![License](https://img.shields.io/badge/License-${license})`)
    return `![${license}](https://img.shields.io/badge/License-${license}.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return
  } else {
    //return license link
    // console.log(`[${license}](http://choosealicense.com/licenses/${license})`)
    return `[${license}](http://choosealicense.com/licenses/${license})`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (!license) {
    return
  } else {
    var licenseSection =`
## Licenses`
    for (let i = 0; i < license.length; i++) {
      var licensebadges =`
${renderLicenseBadge(license[i])}`

      var licenseLink = `
${renderLicenseLink(license[i])}`
  licenseSection+=licensebadges     
  licenseSection+=licenseLink      
    }
    return licenseSection
    // renderLicenseBadge(license)
    // console.log(renderLicenseBadge(license))
    // console.log(renderLicenseLink(license))
    // renderLicenseLink(license)
  }
}
// renderLicenseSection('mit')
//Test object => 
// var testObject = {
//   title: "project",
//   description: "A string of letters and numb3rs",
//   tableofcontents: true,
//   installation: "Use a toolbox",
//   usage: "You know how to whistle dont ya",
//   contribution: "Contact through email",
//   credits: "Thanks Obama",
//   tests: "Run through node",
//   license: "MIT"
// }
// TODO: Create a function to generate markdown for README
function generateMarkdown({ 
  title,
  description, 
  tableofcontents, 
  installation, 
  usage, 
  contribution, 
  credits, 
  tests, 
  license }
) {
  var markdown = `# ${title}
## Description
${description}`

  if (tableofcontents) {
    var toc = `
## Table of Contents`
    installation ? toc += `
- [Installation](#installation)` : null
    usage ? toc += `
- [Usage](#Usage)` : null
    contribution ? toc += `
- [Contribution](#contribution)` : null
    credits ? toc += `
- [Credits](#Credits)` : null
    tests ? toc += `
- [Tests](#tests)` : null
    license ? toc += `
- [License](#license)` : null
    markdown += toc
  }
  installation ? markdown += `
## Installation
${installation}.
` : null
  if (usage) {
    var use = `## Usage
${usage}`
    markdown += use
  };
  if (contribution) {
    var contribute =
      `
## How to Contribute
${contribution}
`
    markdown += contribute
  }
  if (credits) {
    var credit =
      `## With special thanks to:
${credits}
`
    markdown += credit
  }
  if (tests) {
    var test =
      `## Tests
${tests}
`
    markdown += test
  }
  if (license) {
    markdown += renderLicenseSection(license)
  }
  console.log(markdown)
  return markdown
}


// generateMarkdown(testObject)
module.exports = generateMarkdown;
