window.addEventListener('load',function(){
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    var w = focus.offsetWidth;
    var index = 0;

    var timer = setInterval(function(){
        index ++;
        var translateX = -index * w;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translateX + 'px)';
    },2000);

    ul.addEventListener('transitionend',function(){
    if (index >= 3){
        index = 0;
        ul.style.transition = 'none';
        var translateX = -index * w;
        ul.style.transform = 'translateX(' + translateX + 'px)';
    }else if (index < 0){
        index = 2;
        ul.style.transition = 'none';
        var translateX = -index * w;
        ul.style.transform = 'translateX(' + translateX + 'px)';
    }
    ol.querySelector('.current').classList.remove('current');
    ol.children[index].classList.add('current');
    });
    
    var startX = 0 ;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstrat',function(e){
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    });


    ul.addEventListener('touchmove', function(e){
    moveX = e.targetTouches[0].pageX - startX;
    var translateX = -index * w + moveX;
    ul.style.transition = 'none';
    ul.style.transform = 'translateX(' + translateX + 'px)';
    flag = true;
    e.preventDefault();
    });


    ul.addEventListener('touchend', function(e){
        if(flag){
            if(Math.abs(moveX) > 50){
                if ( moveX > 0){
                    index --;
                }else{
                    index++;
                }
                var translateX = -index * w + moveX;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translateX + 'px)';
                }
                else{
                var translateX = -index * w + moveX;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translateX + 'px)';
                }
        }
        clearInterval(timer);
        timer = setInterval(function(){
            index ++;
            var translateX = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translateX + 'px)';
        },2000);
    });

    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');
    window.addEventListener('scroll',function(){
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    })
    goBack.addEventListener('click',function(){
        window.scroll(0, 0);
    })
})