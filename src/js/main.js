import './lib/lib';

$('button').on('click', function() {
    $('div').eq(1).toggleClass('active');
});