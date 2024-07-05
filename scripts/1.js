var t1 = document.querySelector('#t1');
var t2 = document.querySelector('#t2');
var t3 = document.querySelector('#t3');
var t4 = document.querySelector('#t4');
var treturn = document.querySelector('#treturn');
var tc1 = t1.children;
var tc2 = t2.children;
var tc3 = t3.children;
var tc4 = t4.children;
var tcreturn = treturn.children;


showScore();
var followTextElement = null;

tc1[0].addEventListener('click', function (e){

    if(tc1.length>=3)
    {
        window.location.href = tc1[2].getAttribute('herf');
    }
    else {
        tc1[1].src = 'sources/1/1b.png';

    }



})

tc2[0].addEventListener('click', function (e){

    if(tc2.length>=3)
    {
        window.location.href = tc2[2].getAttribute('herf');
    }
    else {
        tc2[1].src = 'sources/1/2b.png';
    }

})

tc3[0].addEventListener('click', function (e){

    if(tc3.length>=3)
    {
        window.location.href = tc3[2].getAttribute('herf');
    }
    else {
        tc3[1].src = 'sources/1/3b.png';
        displayword(e, '闹铃响了');

        var tmp = Number(sessionStorage.getItem('1_3'));
        if(tmp == 0)
        {
            sessionStorage.setItem('1_3', '1');
            tmp = Number(sessionStorage.getItem('count'));
            tmp = tmp + 1;
            sessionStorage.setItem('count', String(tmp));
        }

        showScore();

    }

})

tc4[0].addEventListener('click', function (e){

    if(tc4.length>=3)
    {
        window.location.href = tc4[2].getAttribute('herf');
    }
    else {
        tc4[1].src = 'sources/1/4b.png';
        displayword(e, '没挂移液枪');

        var tmp = Number(sessionStorage.getItem('1_4'));
        if(tmp == 0)
        {
            sessionStorage.setItem('1_4', '1');
            tmp = Number(sessionStorage.getItem('count'));
            tmp = tmp + 1;
            sessionStorage.setItem('count', String(tmp));
        }

        showScore();
    }

})

tcreturn[0].addEventListener('click', function (e){

    if(tcreturn.length>=3)
    {
        window.location.href = tcreturn[2].getAttribute('herf');
    }
    else {
        tcreturn[1].src = 'sources/return.png';

    }


})

function showScore() {
    var tmp = String(sessionStorage.getItem('count'));
    tmp += ' / ';
    tmp += String(sessionStorage.getItem('all'));

    var tscore = document.querySelector('#tscore');
    tscore.textContent = 'SCORE: ' + tmp;
}
function displayword(e, tstr)
{
    // 如果已经存在文字元素，则先移除
    if (followTextElement) {
      document.body.removeChild(followTextElement);
      followTextElement = null;
    }

    // 创建一个新的元素
    followTextElement = document.createElement('div');
    followTextElement.classList.add('follow-text');
    followTextElement.textContent = tstr;

    // 设置元素的位置
    followTextElement.style.left = `${e.pageX + 10}px`;
    followTextElement.style.top = `${e.pageY + 10}px`;

    // 添加到body中
    document.body.appendChild(followTextElement);

    // 设置元素在添加后立即显示
    followTextElement.style.opacity = 1;

    // 设置一段时间后隐藏
    setTimeout(() => {
        if(followTextElement != null)
        {
            followTextElement.style.opacity = 0;
            setTimeout(() => {
                if(followTextElement != null)
                {
                    if (followTextElement.parentNode) {
                      document.body.removeChild(followTextElement);
                      followTextElement = null;
                    }
                }

              }, 1000); // 等待透明度变化完成后再移除元素
        }



    }, 1000); // 2秒后开始淡出
}