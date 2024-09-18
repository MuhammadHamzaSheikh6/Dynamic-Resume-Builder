document.addEventListener('DOMContentLoaded', function() {
    const quillOptions = {
        theme: 'snow'
    };

    const educationEditor = new Quill('#education-editor', quillOptions);
    const skillsEditor = new Quill('#skills-editor', quillOptions);
    const experienceEditor = new Quill('#experience-editor', quillOptions);

    document.getElementById('resume-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = educationEditor.root.innerHTML;
        const skills = skillsEditor.root.innerHTML;
        const experience = experienceEditor.root.innerHTML;
        
        const pictureInput = document.getElementById('profile-picture');
        const pictureFile = pictureInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('display-picture').src = e.target.result;
        };
        
        if (pictureFile) {
            reader.readAsDataURL(pictureFile);
        }
        
        document.getElementById('display-name').textContent = name;
        document.getElementById('display-email').textContent = email;
        document.getElementById('display-email').href = `mailto:${email}`;
        document.getElementById('display-phone').textContent = phone;
        document.getElementById('display-phone').href = `tel:${phone}`;
        document.getElementById('display-education').innerHTML = education;
        document.getElementById('display-skills').innerHTML = skills;
        document.getElementById('display-experience').innerHTML = experience;
        
        document.getElementById('resume-container').style.display = 'flex';
    });
});
