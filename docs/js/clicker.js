$(document).ready(function () {
    $('.card-small__clicker').click(function (event) {
        $('.clicker__top').toggleClass('active');
        $('.clicker__bottom').toggleClass('active');
    });
});