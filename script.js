var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // create resume output
        var resumeOutput = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(name_1, " </p> <br>\n    <p><strong>Email:</strong> ").concat(email, " </p> <br>\n    <p><strong>Phone:</strong> ").concat(phone, "</p> <br>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p><br>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p><br>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p><br>\n    ");
        //display the resume putput
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('THE RESUME OUTPUT ELEMENTS ARE MISSING');
        }
    }
    else {
        console.error('ONE OR MORE OUTPUT ELEMENTS ARE MISSING');
    }
});
