/*If user elects to include a license, creates a badge
based on the license associated with the project's repository
*/
function renderLicenseBadge(license, username, title) {
  if (!license) {
    return
  } else {
    //return license badge
    return `![Github License](https://img.shields.io/github/license/${username}/${title})`
  }
}

//Creates a message indicating what license the project uses.
function renderLicenseLink(license) {
  if (!license) {
    return
  } else {
   
    //Returns a short sentence including a link to the license information page
    return `
This project is licensed under [${license[0][0]}](http://choosealicense.com/licenses/${license[0][1]})`
  }
}
/*Creates a license section based on user input.
 If user has not linked a license in their repository,
 a badge will still be created, but it will indicate something
 is wrong.
*/
function renderLicenseSection(license, username, title) {
  
  if (!license) {
    return
  } else {
    var licenseSection =`
## License
${renderLicenseBadge(license, username, title)}
${renderLicenseLink(license)}
`
    return licenseSection
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ 
  title,
  username,
  email,
  description, 
  tableofcontents, 
  installation, 
  usage,
  screenshot,
  contribution, 
  credits, 
  tests, 
  license }
) {
  //Creates the inital markdown variable
  var markdown = `# ${title}
## Description
${description}`

//Creates a table of contents including any sections the user has chosen to create.
  if (tableofcontents) {
    var toc = `
## Table of Contents

- [Description](#description)`

    installation ? toc += `
- [Installation](#installation)` : null
    
    usage ? toc += `
- [Usage](#usage)` : null
    
    credits ? toc += `
- [Credits](#credit)` : null

    contribution ? toc += `
- [Contribution](#how-to-contribute)` : null

    tests ? toc += `
- [Tests](#tests)` : null

    toc += `
- [Questions](#questions)`

    license ? toc += `
- [License](#license)` : null
    
    markdown += toc
  }
  //If the user answers a question, adds a section to the file.
  installation ? markdown += `
## Installation
${installation}.
` : null
  if (usage) {
    var use = `
## Usage
${usage}`
screenshot ? use+= `
![screenshot of application](${screenshot})` : ``
    markdown += use
  };
  if (contribution) {
    var contribute = `
## How to Contribute
${contribution}
`
    markdown += contribute
  }
  if (credits) {
    var credit = `
## Credit
With special thanks to:

[${credits}](https://github.com/${credits})
`
    markdown += credit
  }
  if (tests) {
    var test = `
## Tests
${tests}
`
    markdown += test
  }
  markdown += `
## Questions
For any questions you can reach out to me at:

[My Email](mailto:${email})

[My GitHub](https://github.com/${username})
`
  if (license) {
    //Runs the renderLicenseSection function and appends it to markdown
    markdown += renderLicenseSection(license, username, title)
  }
  return markdown
}


module.exports = generateMarkdown; //allows functions in this file to be used in an external file (index.js in this case)