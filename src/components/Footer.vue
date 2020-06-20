<template>
    <div class="ls-bg-footer">
        <div class="ls-container">
            <div>
                <ul class="footer-list">
                    <li class="footer-title"><b>关于我们</b>:</li>
                    <li><router-link to="/about">公司简介</router-link></li>
                    <li><router-link to="/about">荣誉证书</router-link></li>
                    <li><router-link to="/about">企业文化</router-link></li>
                    <li><router-link to="/about">货物跟踪</router-link></li>
                    <li><router-link to="/about">组织架构</router-link></li>
                    <li><router-link to="/about">船期查询</router-link></li>
                </ul>
            </div>
            <div>
                <ul class="footer-list">
                    <li class="footer-title"><b>联系地址</b>:</li>
                    <li><span>浙江省宁波市鄞州区姚隘路796号(4-4)</span></li>
                    <li class="footer-title"><b>联系电话</b>:</li>
                    <li><span>0755-25107956</span></li>
                    <li class="footer-title"><b>投诉建议</b>:</li>
                    <li><span>0755-25109119</span></li>
                </ul>
            </div>
            <div class="line-separate_dark"></div>
            <!--备案信息-->
            <div class="copyright">
                <img src="../images/badge.png" />
                <span>网站备案/许可证号 粤ICP备05073678号-1</span>
            </div>
        </div>
    </div>
</template>

<style>
    .line-separate_dark {
        width: 100%;
        border-bottom: 1px solid #4c4e51;
        margin: 10px 0px;
    }

    .ls-bg-footer {
        background: #2e3033;
    }
    .ls-container {
        min-width: 1080px;
        color: #959595;
        margin-bottom: 20px;
        text-align: center;
    }
    .copyright {
        margin-bottom: 10px;
        padding-bottom: 10px;
        font-size: 14px;
        color: #959595;
        text-align: center;
    }
</style>