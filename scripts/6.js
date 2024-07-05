var t1 = document.querySelector('#t1');
var tc1 = t1.children;



tc1[0].addEventListener('click', function (){

    if(tc1.length>=3)
    {
        window.location.href = tc1[2].getAttribute('herf');
    }
    else {
        tc1[1].src = 'sources/3/1b.png';
    }

})
