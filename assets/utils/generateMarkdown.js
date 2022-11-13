// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return "";
  } else {
    return `[![License:${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return "";
  } else if (license == 'GNUGeneralPublicv3.0') {
    license = 'GPL-3.0';
    return `(https://opensource.org/licenses/${license})`;
  } else {
    // console.log(license);
    return `(https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return `None`;
  } else {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Content

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, reach out here:
- GitHub Username: ${data.gitHubUsername}
- GitHub link: https://github.com/${data.gitHubUsername}
- Email Address: ${data.emailAddress}`;
}

module.exports = generateMarkdown;