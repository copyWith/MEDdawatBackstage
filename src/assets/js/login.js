window.onload = function () {
    var fade = document.querySelector('.fade'),
        lb = fade.querySelector('.lb'),
        li = lb.querySelectorAll('li'),
        le = fade.querySelector('.le'),
        ri = fade.querySelector('.ri'),
        dot = fade.querySelector('.dot'),
        dotLi = dot.querySelectorAll('li'),
        imgNum = 0,//图片计数器
        fadeOutTimer, fadeInTimer, autoPlayTimer,//淡出定时器,淡入定时器
        flag = true,
        dotNum = 0;//焦点按钮计数器

    ri.onclick = function () {
        if (flag) {
            flag = false;
            var oldLi = li[imgNum];//旧的li
            if (imgNum >= li.length - 1) {
                imgNum = 0;
            }
            var newLi = li[imgNum + 1];//新的li
            var o1 = parseFloat(getComputedStyle(oldLi).opacity),
                o2 = parseFloat(getComputedStyle(newLi).opacity);
            if (o1 >= 0) {
                fadeOut(oldLi);
            } else {
                fadeIn(oldLi);
            }
            if (o2 <= 0) {
                fadeIn(newLi);
            } else {
                fadeOut(newLi);
            }
            noBg();
            if (dotNum >= dotLi.length - 1) {
                dotNum = -1;
            }
            dotLi[dotNum + 1].style.backgroundColor = '#3cf';
            dotNum++;
            imgNum++;
        }
    };
    le.onclick = function () {
        if (flag) {
            flag = false;
            var oldLi = li[imgNum];//旧的li
            if (imgNum <= 0) {
                imgNum = li.length - 1;
            }
            var newLi = li[imgNum - 1];//新的li
            var o1 = parseFloat(getComputedStyle(oldLi).opacity),
                o2 = parseFloat(getComputedStyle(newLi).opacity);
            if (o1 >= 0) {
                fadeOut(oldLi);
            } else {
                fadeIn(oldLi);
            }
            if (o2 <= 0) {
                fadeIn(newLi);
            } else {
                fadeOut(newLi);
            }
            noBg();
            if (dotNum <= 0) {
                dotNum = dotLi.length
            }
            dotLi[dotNum - 1].style.backgroundColor = '#3cf';
            dotNum--;
            imgNum--;
        }
    };
    autoPlay();
    function autoPlay() {
        autoPlayTimer = setInterval(
            function () {
                ri.onclick()
            }, 2500
        );
    }
    //淡出动画fadeOut
    function fadeOut(element) {
        fadeOutTimer = setInterval(
            function () {
                var op = getComputedStyle(element).opacity;
                if (op <= 0) {
                    clearInterval(fadeOutTimer);
                    flag = true;
                    return;
                }
                element.style.opacity = op - 0.1;
            }, 70
        )
    }

    //淡入动画fadeIn
    function fadeIn(element) {
        fadeInTimer = setInterval(
            function () {
                var op = parseFloat(getComputedStyle(element).opacity);
                if (op >= 1) {
                    clearInterval(fadeInTimer);
                    flag = true;
                    return;
                }
                element.style.opacity = op + 0.1;
            }, 70
        )
    }

    //焦点按钮背景色变白
    function noBg() {
        for (var i = 0; i <= dotLi.length - 1; i++) {
            dotLi[i].style.backgroundColor = '#fff';
        }
    }

    //焦点按钮点击事件
    for (var i = 0; i < dotLi.length; i++) {
        dotLi[i].index = i;//通过对象自定义属性获得每个元素下标值
        dotLi[i].onclick = function () {
            if (flag) {
                flag = false;
                if (dotNum == 0) {
                    li[li.length - 1].style.opacity = 0;
                }
                noBg();//所有焦点按钮背景色变白
                this.style.backgroundColor = '#3cf';//当前焦点按钮背景色变色
                fadeOut(li[dotNum]);//旧图片淡出
                fadeIn(li[this.index]);//新图片淡入
                dotNum = this.index;//新下标赋值给旧下标
                imgNum = this.index;//图片、焦点按钮计数器统一
            }
        };
        flag = true;
    }
};