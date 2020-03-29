$(function() {
    $('#language a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    $('#navbar a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});
