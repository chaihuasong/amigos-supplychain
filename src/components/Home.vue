<template>
  <div>
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
              <a href="item.targetUrl" target="_self">
                <el-image
                      style="width: 100px; height: 100px"
                      :src="item.url"
                      :fit="fill"/>
              </a>
            </el-row>
            <el-row>
              <span class="demonstration">{{ item.title }}</span>
            </el-row>
          </div></el-col>
     </div>
      </el-row>
      <el-row :gutter="20" class="image-row" style="margin-top: 50px">
        <div class="block" v-for="item in imageData2" :key="item.id">
          <el-col :span="3"><div class="grid-content bg-purple">
            <el-row>
              <a :href="item.targetUrl" target="_self">
                <el-image
                        style="width: 100px; height: 100px"
                        :src="item.url"
                        :fit="fill"/>
              </a>
            </el-row>
            <el-row>
              <span class="demonstration">{{ item.title }}</span>
            </el-row>
          </div></el-col>
        </div>
      </el-row>
    </div>
    <div style="height: 100px"/>
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
      {url:require('../images/banner0.jpg'), id:1},
      {url:require('../images/banner1.jpg'), id:2},
    ],
    imageData1:[
      {url:require('../images/modules/bg.png'), title:"报关", targetUrl:"", id:1},
      {url:require('../images/modules/hy.png'), title:"海运", targetUrl:"", id:2},
      {url:require('../images/modules/ky.png'), title:"空运", targetUrl:"", id:3},
      {url:require('../images/modules/qy.png'), title:"国内陆运", targetUrl:"", id:4},
      {url:require('../images/modules/sj.png'), title:"商检", targetUrl:"", id:5},
    ],
    imageData2:[
      {url:require('../images/modules/wxp.png'), title:"危险品申报", targetUrl:"", id:1},
      {url:require('../images/modules/fba.png'), title:"FBA头程服务", targetUrl:"", id:2},
      {url:require('../images/modules/cc.png'), title:"海外仓储", targetUrl:"", id:3},
      {url:require('../images/modules/jr.png'), title:"物流金融", targetUrl:"", id:4},
      {url:require('../images/modules/bs.png'), title:"保税区物流", targetUrl:"", id:5},
    ]
  })
}
</script>

<style>
  .el-main {
    text-align: center;
    height: 1200px;
  }
  .main-title {
    display:block;
    text-align: center;
    font-size: 30px;
    padding-top: 30px;
    padding-bottom: 50px;
  }
  .image-row {
    width: 70%;
    left: 30%;
  }
</style>
