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

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Hello World');
                }
            ]
        ]
    }
}));