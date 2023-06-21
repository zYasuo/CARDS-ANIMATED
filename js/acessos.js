$(document).ready(function() {

    AOS.init({
        duration: 800, // duração da animação
        easing: 'slide', // tipo de animação
        once: false // define se a animação deve acontecer uma vez ou em cada rolagem
    });

    $('.btn-primary').hover(
        function() {
            $(this).css("background-color", "#FF6347");
        }, 
        function() {
            $(this).css("background-color", "#007BFF"); 
        }
    );

    $('.ixc').css("background-color", "#00B0BD");
    $('.pbx').css("background-color", "#002E4E");
    $('.zimbra').css("background-color", "#0084C4");
    $('.ramal').css("background-color", "#0090B8");
    $('.sau').css("background-color", "#00A4F7");
    $('.rocket').css("background-color", "#b3d7ff");
    $('.sgi').css("background-color", "#ffff");
    $('.school').css("background-color", "#2A2C2B");
    $('.acad').css("background-color", "#007bff");
    $('.wiki').css("background-color", "#738BCC");
    $('.etriage').css("background-color", "#EEEEEE");

    let index = 0;
    const cards = $('.card');
    function flipCard() {
        $(cards[index]).toggleClass('flipped');
        setTimeout(function() {
            $(cards[index]).toggleClass('flipped');
            index++;
            if (index >= cards.length) {
                index = 0;
            }
            flipCard();
        }, 1000);
    }
    flipCard();

});
