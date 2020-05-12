//Page Object
var api = require("../../utils/api")
Page({
    data: {
        id: '',
        picUrl: '',
        songUrl: '',
        songName: '',
        author: ''
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
    }
});