import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(1800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(1800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(1800);
});

$('.wrap').html(
    `
    <div class="dropdown">
       <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
       <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a class="dropdown-item" href="">Action</a>
            <a class="dropdown-item" href="">Action #2</a>
            <a class="dropdown-item" href="">Action #3</a>
        </div>
    </div>
    `
)

$('.dropdown-toggle').dropdown();