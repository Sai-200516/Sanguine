document.getElementById('event-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const name = form.name.value;
    const gender = form.gender.value;
    const regNo = form['reg-no'].value;
    const phone = form.phone.value;
    const course = form.course.value;
    const section = form.section.value;
    const year = form.year.value;
    const location = form.location.value;
    const referredBy = form['referred-by'].value;

    if (email && name && gender && regNo && phone && course && section && year && location && referredBy ) {
        alert(`Thank you for registering, ${name}! You have successfully registered for Eclipse DJ Night.`);
        form.reset();
    } else {
        alert('Please fill out all required fields.');
    }
});
