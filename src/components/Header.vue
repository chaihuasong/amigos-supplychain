<template>
    <div>
        <div class="home-css">
            宁波阿密格供应链有限公司
        </div>
        <div class="el-menu-css">
            <el-menu router :default-active="0" class="el-menu-right" mode="horizontal" @select="handleSelect">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/services">服务介绍</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">客户案例</template>
                    <el-menu-item index="/case">案例1</el-menu-item>
                    <el-menu-item index="/case">案例2</el-menu-item>
                    <el-menu-item index="/case">案例3</el-menu-item>
                    <el-submenu>
                        <template slot="title">解决方案 </template>
                        <el-menu-item index="/solution">解决方案1</el-menu-item>
                        <el-menu-item index="/solution">解决方案2</el-menu-item>
                        <el-menu-item index="/solution">解决方案3</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="/news">新闻</el-menu-item>
                <el-menu-item index="/about">关于我们</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<style>
    .el-menu-css{
    position: absolute;
    right: 60px;
    }
    .el-menu-css .el-menu-right {
    border-bottom-color: #ffffff !important;
    }
    .el-menu-css .el-menu-right .el-menu-item {
    font-size: 16px;
    }
    .el-menu-right>.el-submenu .el-submenu__title {
    font-size: 16px;
    }
</style>