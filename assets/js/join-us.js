/*$(document).ready(function() {
    // Form validation
    $('#join-form').submit(function(event) {
        let isValid = true;

        // Check if all mandatory fields are filled
        $('input[required]').each(function() {
            if ($(this).val() === '') {
                alert('Please fill out the ' + $(this).prev().text() + ' field.');
                isValid = false;
                return false; // Stop checking further fields
            }
        });

        if (!isValid) {
            event.preventDefault();  // Prevent form submission if not valid
        }
    });
});*/