$(document).ready(function () {
    $('.info__list--title').click(function (event) {
        if ($('.market__btn').hasClass('one')) {
            $('.info__list--title').not($(this)).removeClass('active');
            $('.info__sublist').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

    $('.market__list--title').click(function (event) {
        if ($('.market__btn').hasClass('one')) {
            $('.market__list--title').not($(this)).removeClass('active');
            $('.market__sublist').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});