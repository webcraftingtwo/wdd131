// get current year
const today = new Date();
const currentYear = today.getFullYear();

// find element with id "currentyear" and set its content
const yearSpan = document.querySelector("#currentyear");
yearSpan.textContent = currentYear;

// get document last modified date
const lastModifiedDate = document.lastModified;

// find element with id "modified" and set its content
const modifiedParagraph = document.querySelector("#modified");
modifiedParagraph.textContent = `Last Modification: ${lastModifiedDate}`;