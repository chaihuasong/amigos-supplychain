<template>
  <div>
    <el-container>
      <el-header>
        <div class="el-menu-css">
          <el-menu :default-active="activeIndex" class="el-menu-right" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">服务介绍</el-menu-item>
            <el-submenu index="2">
              <template slot="title">客户案例</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">解决方案 </template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3">新闻</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">关于我们</a></el-menu-item>
          </el-menu>
        </div>
      </el-header>

      <el-main class="el-main-css">
        <el-carousel indicator-position="outside" height="600px">
          <el-carousel-item v-for="item in carouselData" :key="item.id">
            <el-image :src="item.url" class="carousel_image_type" style="width: auto; height: 100%"/>
          </el-carousel-item>
        </el-carousel>
        <br/>
        <span class="main-title">
          服务范围
        </span>

        <div class="demo-image">
          <el-row :gutter="5" class="image-row">
          <div class="block" v-for="item in imageData1" :key="item.id">
              <el-col :span="3"><div class="grid-content bg-purple">
                <el-row>
                  <el-image
                          style="width: 100px; height: 100px"
                          :src="item.url"
                          :fit="fill"/>
                </el-row>
                <el-row>
                  <span class="demonstration">{{ item.title }}</span>
                </el-row>
              </div></el-col>
         </div>
          </el-row>
          <el-row :gutter="20" class="image-row">
            <div class="block" v-for="item in imageData2" :key="item.id">
              <el-col :span="3"><div class="grid-content bg-purple">
                <el-row>
                  <el-image
                          style="width: 100px; height: 100px"
                          :src="item.url"
                          :fit="fill"/>
                </el-row>
                <el-row>
                  <span class="demonstration">{{ item.title }}</span>
                </el-row>
              </div></el-col>
            </div>
          </el-row>
        </div>
      </el-main>
      <el-footer>
        关于我们: 公司简介 荣誉证书 企业文化 货物跟踪 组织架构 船期查询
        <br/>
        联系地址: 深圳市罗湖区深南东路文华大厦西座3楼 联系电话: 0755-25107956 投诉建议: 0755-25109119
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    msg: String
  },
  data: () => ({
    carouselData:[
      {url:require('../assets/banner0.jpg'), id:1},
      {url:require('../assets/banner1.jpg'), id:2},
    ],
    imageData1:[
      {url:require('../assets/modules/bg-float.png'), title:"报关", id:1},
      {url:require('../assets/modules/hy-float.png'), title:"海运", id:2},
      {url:require('../assets/modules/ky-float.png'), title:"空运", id:3},
      {url:require('../assets/modules/qy-float.png'), title:"国内陆运", id:4},
      {url:require('../assets/modules/sj-float.png'), title:"商检", id:5},
    ],
    imageData2:[
      {url:require('../assets/modules/wxp-float.png'), title:"危险品申报", id:1},
      {url:require('../assets/modules/fba-float.png'), title:"FBA头程服务", id:2},
      {url:require('../assets/modules/cc-float.png'), title:"海外仓储", id:3},
      {url:require('../assets/modules/jr-float.png'), title:"物流金融", id:4},
      {url:require('../assets/modules/bs-float.png'), title:"保税区物流", id:5},
    ]
  })
}
</script>

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
  .el-main {
    text-align: center;
    height: 1200px;
  }
  .main-title {
    display:block;
    text-align: center;
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .image-row {
    width: 70%;
    left: 30%;
  }
</style>
