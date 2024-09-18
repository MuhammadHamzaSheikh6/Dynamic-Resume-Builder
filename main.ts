document.getElementById('generate-resume')?.addEventListener('click', function () {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const profilePicture = (document.getElementById('profile-picture') as HTMLInputElement).files?.[0];

    let resumeHTML = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    `;

    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = function (e) {
            resumeHTML += `<img src="${e.target?.result}" alt="Profile Picture">`;
            renderResume(resumeHTML, education, skills, workExperience);
        };
        reader.readAsDataURL(profilePicture);
    } else {
        renderResume(resumeHTML, education, skills, workExperience);
    }
});

function renderResume(resumeHTML: string, education: string, skills: string, workExperience: string) {
    resumeHTML += `
        <section>
            <h2>Education</h2>
            <p>${education}</p>
        </section>
        <section>
            <h2>Skills</h2>
            <ul>${skills.split('\n').map(skill => `<li>${skill}</li>`).join('')}</ul>
        </section>
        <section>
            <h2>Work Experience</h2>
            <p>${workExperience}</p>
        </section>
    `;

    document.getElementById('resume-display')!.innerHTML = resumeHTML;
}
