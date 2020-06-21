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
    <div class="btn-price-wrap">
      <a class="price-advice btn-price_large" @click="dialogVisible = true">获取报价</a>
    </div>
    <el-dialog
            :visible.sync="dialogVisible"
            width="650px">

      <div class="popup-content">
        <div class="customer-input">
          <span class="iconfont icon-chacha customer-close"></span>
          <div class="head-bg">基本信息</div>
          <form id="consultForm" method="post">
            <div class="input-short-wrap">
              <div class="customer-label">
                <span>姓名</span>
              </div>
              <input id="consultName" v-model="consultName" class="form-item input-short" />
            </div>
            <div class="input-short-wrap">
              <div class="customer-label">
                <span>电话</span>
              </div>
              <input id="consultPhone" v-model="consultPhone" type="email" class="form-item input-short" placeholder="固话请加区号！" required="required" />
              <div class="phone-note">注:请填写真实有效的联系方式！</div>
            </div>
            <div class="clearfix"></div>
            <div class="input-long-wrap">
              <div class="customer-label">
                <span>邮箱</span>
              </div>
              <input id="consultEmail" v-model="consultEmail" class="form-item input-long" />
            </div>
            <div class="text-long-wrap">
              <div class="customer-label">
                <span>备注</span>
              </div>
              <textarea id="consultRemark" v-model="consultRemark" class="form-item text-long"
                        placeholder="请大致介绍您货物信息及起始地和目的地!工作人员会于近期联系您，请注意您的电话或邮箱！"/>
            </div>
            <div class="customer-input-btn" @click="submit">提交</div>
          </form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    msg: String
  },
  data: () => ({
    consultName:'',
    consultPhone:'',
    consultEmail:'',
    consultRemark:'',
    dialogVisible: false,
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
  }),
  methods: {
    open() {
      this.$alert('\n' +
              '        <div class="popup-content">\n' +
              '            <div class="customer-input">\n' +
              '                <span class="iconfont icon-chacha customer-close"></span>\n' +
              '                <div class="head-bg">基本信息</div>\n' +
              '                <form id="consultForm" method="post">\n' +
              '                    <div class="input-short-wrap">\n' +
              '                        <div class="customer-label">\n' +
              '                            <span>姓名</span>\n' +
              '                        </div>\n' +
              '                        <input id="consultName" class="form-item input-short" />\n' +
              '                    </div>\n' +
              '                    <div class="input-short-wrap">\n' +
              '                        <div class="customer-label">\n' +
              '                            <span>电话</span>\n' +
              '                        </div>\n' +
              '                        <input id="consultPhone" type="email" class="form-item input-short" placeholder="固话请加区号！" required="required" />\n' +
              '                        <div class="phone-note">注:请填写真实有效的联系方式！</div>\n' +
              '                    </div>\n' +
              '                    <div class="clearfix"></div>\n' +
              '                    <div class="input-long-wrap">\n' +
              '                        <div class="customer-label">\n' +
              '                            <span>邮箱</span>\n' +
              '                        </div>\n' +
              '                        <input id="consultEmail" class="form-item input-long" />\n' +
              '                    </div>\n' +
              '                    <div class="text-long-wrap">\n' +
              '                        <div class="customer-label">\n' +
              '                            <span>备注</span>\n' +
              '                        </div>\n' +
              '                        <textarea id="consultRemark" class="form-item text-long" placeholder="请大致介绍您货物信息及起始地和目的地!工作人员会于近期联系您，请注意您的电话或邮箱！"></textarea>\n' +
              '                    </div>\n' +
              '                    <div class="customer-input-btn" @click="submit">提交</div>\n' +
              '                </form>\n' +
              '            </div>\n' +
              '        </div>', '', {
        dangerouslyUseHTMLString: true,
        customClass:"msgBox",
        showConfirmButton:false,
      });
    },
    submit() {
      const requestForm = {
        consultName: this.consultName,
        consultPhone: this.consultPhone,
        consultEmail: this.consultEmail,
        consultRemark: this.consultRemark
      };
      this.dialogVisible = false;
      this.$post('http://changsong.net.cn', requestForm).then(req => {
        console.log(req.data)
      }).catch(err => {
        console.log(err)
      });
    }
  }
}
</script>

<style>
  @import "../css/common.css";
  @import "../css/home.css";
  .msgBox {
    width:33%;
    height: 65%;
  }
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
