var _a;
// listing element
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var addressElement = document.getElementById("address");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        addressElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // picture elements
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        //   create resume output
        var resumeOutput = "\n <h2>Resume :</h2>\n ".concat(profilePictureURL
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\"class=\"profilePicture\">")
            : "", "\n <h4><span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </h4>\n<p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n <p><strong>Phone Number :</strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span></p>\n <p><strong>Address Here... </strong><span id=\"edit-address\" class=\"editable\"> ").concat(address, " </span></p>\n\n<h3>Education :</h3>\n<p id=\"edit-education\" class=\"editable\"> ").concat(education, "</p>\n\n<h3>Experience :</h3>\n<p id=\"edit-experience\" class=\"editable\" > ").concat(experience, "</p>\n\n<h3>Skills :</h3>\n<p id=\"edit-skills\" class=\"editable \"> ").concat(skills, "</p>\n\n    ");
        // Display the resume output
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "block";
            makeEdittable();
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
function makeEdittable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentvalue = currentElement.textContent || "";
            // replace content :
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentvalue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
