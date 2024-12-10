// Wait for the DOM to be ready before running the script
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeContainer = document.getElementById('resume') as HTMLDivElement;
  
    // Event listener for form submission
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault();
  
      // Retrieve form values
      const fullName = (document.getElementById('fullName') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const address = (document.getElementById('address') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
      const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
      const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  
      // Build the resume content dynamically
  
      const resumeHTML = `
   
    <h3>Personal Information</h3>
    <p><b>Name:</b>${fullName}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>
    <p><b>Address:</b>${address}</p>
     
    <h3>Education</3>
    <p>${education}</p>
  
    <h3>Experience</3>
    <p>${experience}</p> 

    <h3>Skills</3>
    <p>${skills}</p> 
    `;
      // Insert the generated resume HTML into the resume container
      resumeContainer.innerHTML = resumeHTML;
    });
  });
  