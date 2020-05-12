//index.js
//获取应用实例
const app = getApp()
var api = require("../../utils/api")
Page({
  data: {
    indicatordots:true,
    autoplay:true,
    interval:2000,
    duration:500,
    banner:[],
    personalized:[]
  },
  onLoad: function () {
    api.getData('/banner',{},'GET',this.banerSu);
    api.getData('/personalized',{},'GET',this.personSu);
  },
  banerSu(data){
    var that=this;
    that.setData({
      banner:data.data.banners
    })
  },
  personSu(data){
    var that=this;
    that.setData({
      personalized:data.data.result
    })
  }
})
