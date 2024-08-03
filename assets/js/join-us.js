document.getElementById('join-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const name = form.name.value;
    const gender = form.gender.value;
    const regNo = form['reg-no'].value;
    const phone = form.phone.value;
    const dob = form.dob.value;
    const course = form.course.value;
    const section = form.section.value;
    const personality = form.personality.value;
    const goodAt = form['good-at'].value;
    const wantToLearn = form['want-to-learn'].value;
    const experience = form.experience.value;
    const year = form.year.value;
    const location = form.location.value;
    const referredBy = form['referred-by'].value;

    if (email && name && gender && regNo && phone && course && section && personality && goodAt && wantToLearn && year && location && dob) {
         if (confirm("Are You Sure Want To Submit The form")) {
            alert(`Thank you for registering, ${name}!`);
             form.reset();
         } else {
            alert(`Form Was Not Submitted`);
  }
    } else {
        alert('Please fill out all required fields.');
    }
});
