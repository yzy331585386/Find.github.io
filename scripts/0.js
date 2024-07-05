var t1 = document.querySelector('#t1');
var t2 = document.querySelector('#t2');

var tc1 = t1.children;
var tc2 = t2.children;


showScore();


tc1[0].addEventListener('click', function (){

    if(tc1.length>=3)
    {
        window.location.href = tc1[2].getAttribute('herf');
    }
    else {
        tc1[1].src = 'sources/0/1b.png';
    }

})

tc2[0].addEventListener('click', function (){

    if(tc2.length>=3)
    {
        window.location.href = tc2[2].getAttribute('herf');
    }
    else {
        tc2[1].src = 'sources/0/2b.png';
    }

})

function showScore() {
    var tmp = String(sessionStorage.getItem('count'));
    tmp += ' / ';
    tmp += String(sessionStorage.getItem('all'));

    var tscore = document.querySelector('#tscore');
    tscore.textContent = 'SCORE: ' + tmp;
}




