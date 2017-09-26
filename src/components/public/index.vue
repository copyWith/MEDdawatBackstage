<template>
    <div id="app" class="row">
        <div class="con"><img src="../../assets/images/logo.png" alt="" style="width: 100%;"/></div>
        <div class="sidebar col-md-2 trans">
            <p class="sp">后台管理系统</p>
            <ul class="ul">
                <li>
                    <router-link to="/index/" tag="a" class="check"><i
                            class="glyphicon glyphicon-home"></i><span>首页</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index/menu" tag="a"><i
                            class="glyphicon glyphicon-menu-hamburger"></i><span>最新菜单</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index/appreciate" tag="a"><i
                            class="glyphicon glyphicon-eye-open"></i><span>菜品欣赏</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index/about" tag="a"><i class="glyphicon glyphicon-user"></i><span>关于我们</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index/relation" tag="a"><i
                            class="glyphicon glyphicon-earphone"></i><span>联系我们</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index/online" tag="a"><i class="glyphicon glyphicon-flash"></i><span>在线订座</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="spc col-md-2 trans"></div>
        <div class="content col-md-10 trans">
            <div class="nav">
                <div class="spc_nav col-md-2 trans"></div>
                <div class="con_nav col-md-10 trans">
                    <a class="glyphicon glyphicon-th-list" href="javascript:;"></a>

                    <div class="nav_con ri">
                        <div class="user">
                            <div class="user_img le"><img src="../../assets/images/user.jpg" alt=""/></div>
                            <span>开发人员</span>
                            <i class="glyphicon glyphicon-triangle-bottom"
                               style="color: #979898;font-size: 8px;transform: scale(0.7);"></i>

                            <div class="list">
                                <ul>
                                    <li><i class="glyphicon glyphicon-cog"></i>个人设置</li>
                                    <li @click="click()"><i class="glyphicon glyphicon-log-in"></i>退出登陆</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data ()
    {
        return {
            testvalue: ''
        }
    }
    ,
    mounted:function () {
        var flag = true;
        var gicon = document.querySelector('.glyphicon-th-list');
        var sidebar = document.querySelector('.sidebar');
        var ul = document.querySelector('.ul');
        var sp = document.querySelector('.sp');
        var uLi = ul.querySelectorAll('a');
        gicon.onclick = function () {
            if (flag) {
                function cla(old, wid) {
                    var s = document.querySelector('.' + old);
                    s.className = old + ' ' + wid + ' trans';
                }

                cla('sidebar', 'col-md-1');
                cla('spc', 'col-md-1');
                cla('content', 'col-md-11');
                cla('con_nav', 'col-md-11');
                cla('spc_nav', 'col-md-1');
                sidebar.style.minWidth = "115px";
                for (var i = 0; i < uLi.length; i++) {
                    var liSpan = uLi[i].querySelector('span');
                    var liI = uLi[i].querySelector('i');
                    liSpan.style.display = "none";
                    liI.style.marginLeft = "23px";
                }
                sp.innerHTML = '后台硬'
            } else {
                function cle(old, wid) {
                    var s = document.querySelector('.' + old);
                    s.className = old + ' ' + wid + ' trans';
                }

                cle('sidebar', 'col-md-2');
                cle('spc', 'col-md-2');
                cle('content', 'col-md-10');
                cle('con_nav', 'col-md-10');
                cle('spc_nav', 'col-md-2');
                sidebar.style.minWidth = "230px";
                for (var i = 0; i < uLi.length; i++) {
                    var liSpan = uLi[i].querySelector('span');
                    var liI = uLi[i].querySelector('i');
                    liSpan.style.display = "inline-block";
                    liI.style.marginLeft = "0";
                }
                sp.innerHTML = '后台管理系统'
            }
            flag = !flag;
        };

        var ls = window.localStorage;
        if (!ls.num) ls.num = 0;
        for (let i = 0; i < uLi.length; i++) {
            uLi[i].onclick = function () {
                for (var s = 0; s < uLi.length; s++) {
                    uLi[s].className = '';
                }
                this.className = 'check';
                ls.num = i;
            }
        }
        window.onload = function () {
            for (var s = 0; s < uLi.length; s++) {
                uLi[s].className = '';
            }
            uLi[ls.num].className = 'check';
        }
    }
    ,
    methods:{
        click:function () {
            this.$router.push({path: '/'});
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

    body, html, #app > div {
        padding: 0;
        margin: 0;
        height: 100vh;
    }

    .trans {
        transition: 0.35s;
    }

    .con {
        width: 120px;
        position: fixed;
        top: 5px;
        left: 50%;
        margin-left: -60px;
        z-index: 100;
    }

    .con img {
        width: 100%;
    }

    .sidebar {
        background-color: #1a2942;
        font-family: glyphicons;
        position: fixed;
        left: 0;
        top: 0;
        padding: 0;
        z-index: 6;
        min-width: 230px;
    }

    .sidebar p {
        margin: 20px 0 40px;
        font-size: 20px;
        color: #fff;
        text-align: center;
    }

    .sidebar ul li a {
        color: #b4b6bd;
        transition: 0.3s;
        text-decoration: none;
        padding: 15px 25px;
        display: block;
    }

    .sidebar ul li i {
        margin-right: 6px;
        width: 25px;
    }

    .sidebar ul li:hover a {
        color: #fff;
    }

    #app .sidebar ul li .check {
        background-color: #162338;
        color: #3bc0c3;
    }

    .content {
        position: relative;
    }

    .content .nav {
        padding-left: 25px;
        padding-right: 25px;
        border-bottom: 1px solid #ececee;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 5;
        background-color: #fff;
    }

    .content .nav a {
        margin: 8px 20px 8px 0;
        padding: 9px 10px;
        color: #b3b3be;
        text-decoration: none;
        float: left;
        font-size: 20px;
    }

    .user {
        height: 100%;
        padding: 8px 15px;
        line-height: 34px;
        cursor: pointer;
        position: relative;
    }

    .list {
        position: absolute;
        top: 100%;
        right: 0;
        width: 120%;
        overflow: hidden;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(0, 0, 0, .1);
        display: none;
    }

    .list ul {
        margin: 5px 0;
    }

    .list li {
        padding: 0 15px;
        color: #979898;
    }

    .list li i {
        margin-right: 5px;
    }

    .list li:hover {
        color: #141719;
        background-color: #edf1f2;
    }

    .user:hover {
        background-color: #edf1f2;
    }

    .user:hover .list {
        display: block;
    }

    .user span {
        margin: 0 6px;
    }

    .user_img {
        width: 36px;
        height: 36px;
        overflow: hidden;
        cursor: pointer;
        border-radius: 50%;
    }

    .user_img img {
        width: 100%;
    }

    .content .container-fluid {
        padding-top: 60px;
    }
</style>
