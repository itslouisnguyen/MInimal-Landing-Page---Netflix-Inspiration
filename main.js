var button = document.getElementsByClassName('bottomfuntion__faq btn');
var cross = document.getElementsByClassName('bottomfuntion__faq cross');
var buttonlength = button.length;
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        var content = button[i].nextElementSibling;
        if (content.classList.toggle('show')) {
            content.classList.add('show'); cross[i].style.transform = 'rotate(-135deg)';
        } else {
            content.classList.remove('show'); cross[i].style.transform = 'rotate(0deg)';
        }
    })
    
}