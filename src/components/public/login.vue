<template>
    <div id="app">
        <div class="box">
            <div class="fade">
                <ul class="lb">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <span class="le"></span>
                <span class="ri"></span>
                <ol class="dot">
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
            <div class="login">
                <div class="main">
                    <p>登陆</p>
                    <input type="text" placeholder="username" class="user"/>
                    <input type="password" placeholder="password" class="pwd"/>
                    <button @click="click()">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//    import {LunJs} from '../../assets/js/login.js'
    export default {
        data ()
    {
        return {
            testvalue: ''
        }
    }
    ,
    methods:{
        click:function(){
            var user=document.querySelector(".user").value;
            var pwd=document.querySelector(".pwd").value;
            if(user=="123"){
                if(pwd=="123"){
//                    window.location.href="/#!/index"
//                    console.log(this.$router)
                    this.$router.push({ path: '/index' })
                }else {
                    alert("密码输入错误！")
                }
            }else {
                alert("用户名输入错误！")
            }
        }
    },
    mounted:function () {

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
    }
    }
</script>

<style>
    body, html, #app {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .box {
        width: 100%;
        height: 100%;
    }

    .fade {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        filter: blur(2px);
        opacity: 1;
    }

    .fade ul {
        width: 100%;
        height: 100%;
    }

    .fade ul li {
        height: 100%;
        width: 100vw;
        float: left;
        background: url("../../assets/images/banner1.jpg") no-repeat center;
        background-size: cover;
        opacity: 0;
        position: absolute;
    }

    .fade ul li:nth-child(1) {
        opacity: 1;
    }

    .fade ul li:nth-child(2) {
        background: url("../../assets/images/banner2.jpg") no-repeat center;
    }

    .fade ul li:nth-child(3) {
        background: url("../../assets/images/banner3.jpg") no-repeat center;
    }

    .fade ul li:nth-child(4) {
        background: url("../../assets/images/banner1.jpg") no-repeat center;
    }

    .login {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .3);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 6;
    }

    .main {
        width: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -150px;
        margin-top: -100px;
    }

    .main p {
        font-weight: bold;
        font-size: 25px;
        color: #fff;
        text-align: center;
    }

    .main input {
        width:250px;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        padding: 10px 15px;
        height: 42px;
        box-sizing: border-box;
        display: block;
        transition-duration: 0.25s;
        outline: none;
        margin: 10px auto;
        color: #fff;
        text-align: center;
        font-size: 18px;
    }

    .main input:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }
    .main input:focus{
        background-color: white;
        width: 300px;
        color: #53e3a6;
    }
    .main button {
        background-color: #f5f7f9;
        box-shadow: 0 15px 30px 0 rgba(255,255,255,.15) inset, 0 2px 7px 0 rgba(0,0,0,.2);
        outline: none;
        border: 0;
        padding: 10px 15px;
        color: #53e3a6;
        border-radius: 3px;
        width: 250px;
        cursor: pointer;
        font-size: 18px;
        transition-duration: 0.25s;
        height: 44px;
        display: block;
        margin: 25px auto;
        text-shadow: 0 1px 2px rgba(0,0,0,.1);
        box-sizing: border-box;
    }
    ::-webkit-input-placeholder{
        font-family: 'Source Sans Pro', sans-serif;
        color: white;
        font-weight: 300;
    }
</style>
