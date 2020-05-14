//Page Object
var api = require("../../utils/api")
Page({
    data: {
        isplay: 'false',
        id: '',
        picUrl: '',
        songUrl: '',
        songName: '',
        author: '',
        style: 'icon-zanting'
    },
    //options(Object)
    
    onLoad: function(options){
        var that=this;
        this.setData({
            id:options.id
        }); 
        api.getData('/song/detail',{ids:options.id},"GET",this.picUrlSu);
        api.getData('/song/url',{id:options.id},"GET",this.songUrlSu);
    },
    onReady: function (e) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myaudio');
        wx.createAudioContext('myaudio').play();
        this.setData({
            isplay:true,
            style:'icon-bofang'
        })
      },
    picUrlSu(data){
        var that=this;
        that.setData({
            picUrl:data.data.songs[0].al.picUrl,
            songName:data.data.songs[0].name
        })
    },
    songUrlSu(data){
        var that=this;
        that.setData({
            songUrl:data.data.data[0].url,
        })
    },
    play(){
        var that=this;
        if(this.data.isplay==true){
            that.audioCtx.pause();
            that.setData({
                isplay:false,
                style:'icon-zanting'
            })
        }else{
            that.audioCtx.play();
            that.setData({
                isplay:true,
                style:'icon-bofang'
            })
        }  
    }
});