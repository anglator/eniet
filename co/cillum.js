$(document).ready(function() {
    var field = {
        $el: $('#exampleForm')
    };

    $('#exampleSelect').change(function() {
        if (field.$el.find("select option:checked").length > 0) {
            console.log('There is at least one selected option.');
        } else {
            console.log('No options selected.');
        }
    });
});
