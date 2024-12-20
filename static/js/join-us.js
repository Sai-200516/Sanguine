document.getElementById('join-form').onsubmit = function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch("{% url 'join_us' %}", {
        method: "POST",
        headers: {
            "X-CSRFToken": document.querySelector('[name=csrfmiddlewaretoken]').value
        },
        body: formData
    }).then(response => {
        if (response.ok) {
            if (confirm("Are You Sure Want To Submit The form")) {
                alert(`Thank you for registering!`);
                form.reset();
            } else {
                alert(`Form Was Not Submitted`);
            }
            window.location.href = 'success_url';
        } else {
            alert('Please fill out all required fields.');
        }
    });
};
