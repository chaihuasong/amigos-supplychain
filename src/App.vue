<template>
    <div id="app">
        <el-container>
            <el-header>
                <v-header/>
            </el-header>

            <el-main>
                <router-view/>
            </el-main>

            <el-footer>
                <v-footer/>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
    import Header from './components/Header'
    import Footer from './components/Footer'

    export default {
        name: "App",
        components: {
            'v-header': Header,
            'v-footer': Footer
        }
    };
</script>
<style>
    .el-container .el-main {
        height: auto;
    }
    .home-css {
        position: absolute;
        left: 60px;
        top: 20px;
        font-size: 25px;
    }

    .el-menu-css {
        position: absolute;
        right: 60px;
    }

    .el-menu-css .el-menu-right {
        border-bottom-color: #ffffff !important;
    }

    .el-menu-css .el-menu-right .el-menu-item {
        font-size: 16px;
    }

    .el-menu-right > .el-submenu .el-submenu__title {
        font-size: 16px;
    }
</style>
