console.log("Welcome");

// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('#scroll').fadeIn();
//         } else {
//             $('#scroll').fadeOut();
//         }
//     });
//     $('#scroll').click(function () {
//         $("html, body").animate({ scrollTop: 0 }, 600);
//         return false;
//     });
// });


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        // mybutton.style.fadeIn();

    } else {
        mybutton.style.display = "none";
        // mybutton.style.fadeOut();
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.body.animate({ scrollTop: 0 }, 600);
    document.documentElement.scrollTop = 0;
}

function increaseSize() {
    document.getElementById('imgmitubishi').style.width = "70%";
    document.getElementById('imgmitubishi').style.height = "50%";
}
function decreaseSize() {
    document.getElementById('imgmitubishi').style.width = "50%";
    document.getElementById('imgmitubishi').style.height = "250px";
}