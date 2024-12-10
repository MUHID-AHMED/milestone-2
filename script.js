// Wait for the DOM to be ready before running the script
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeContainer = document.getElementById('resume');
    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Retrieve form values
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        var education = document.getElementById('education').value;
        // Build the resume content dynamically
        var resumeHTML = "\n   \n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(fullName, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    <p><b>Address:</b>").concat(address, "</p>\n     \n    <h3>Education</3>\n    <p>").concat(education, "</p>\n  \n    <h3>Experience</3>\n    <p>").concat(experience, "</p> \n\n    <h3>Skills</3>\n    <p>").concat(skills, "</p> \n    ");
        // Insert the generated resume HTML into the resume container
        resumeContainer.innerHTML = resumeHTML;
    });
});
