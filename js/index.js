window.addEventListener('load', function () {
    $('.chat_icon_div').on('click', function (e) {
        console.log('working');
        $('.chat').toggleClass('d-none');
    })

    $('.close_div').on('click', function(e) {
        $('.chat').toggleClass('d-none');
    })
});