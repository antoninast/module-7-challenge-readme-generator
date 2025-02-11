// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    "MIT": '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    "GPL": '[![GPL License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    "Apache 2.0": '[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)',
    "BSD": '[![BSD License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    "CC0": '[![CC0 License](https://img.shields.io/badge/License-CC0%201.0%20Universal-blue.svg)](https://creativecommons.org/publicdomain/zero/1.0/)',
  };

  return badges[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    "MIT": "https://opensource.org/licenses/MIT",
    "GPL": "https://www.gnu.org/licenses/gpl-3.0",
    "Apache 2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    "BSD": "https://opensource.org/licenses/BSD-2-Clause",
    "CC0": "https://creativecommons.org/publicdomain/zero/1.0/",
  };

  return licenseLinks[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `${renderLicenseLink(license)}`;
  } else {
    return 'None';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Challenge assignment submission

- **Walkthrough Video**: [https://drive.google.com/file/d/13y2rp7K3Y9wy24NsT2nuqQfi0dSxn-2a/view](https://drive.google.com/file/d/13y2rp7K3Y9wy24NsT2nuqQfi0dSxn-2a/view)
- **GitHub Repo**: [https://github.com/antoninast/module-7-challenge-readme-generator](https://github.com/antoninast/module-7-challenge-readme-generator)

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contribution](#contribution)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
If you have any questions or require further information, please feel free to contact me at:

- **Email**: [${data.email}](mailto:${data.email})
- **GitHub**: [https://github.com/${data.username}](https://github.com/${data.username})

For support or inquiries, you may also open an issue on the GitHub repository.
`;
}
 
export default generateMarkdown;
