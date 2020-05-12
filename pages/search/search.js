//Page Object
var api = require("../../utils/api")
Page({
    data: {
        results: [],
        hots: [],
        value: "",
        hotShow: true
    },
    //options(Object)
    onLoad: function(options){
        api.getData('/search/hot',{},"GET",this.hotSu)
    },
    hotSu(data){
        var that=this;
        that.setData({
            hots:data.data.result.hots
        })
    },
    debounce(func, wait,immediate) {
        let timer;
        return function() {
        let context = this,
            args = arguments;    
            if (timer) clearTimeout(timer);
            if (immediate) {
                let callNow = !timer;
                timer = setTimeout(() => {
                timer = null;
                }, wait);
                if (callNow) func.apply(context, args);
            } else {
                timer  = setTimeout(() => {
                    func.apply
                }, wait)
            }
        }
    },
    SearchInput(e){
        var that=this;
        if(!e.detail.value){
            that.setData({
                results:[],
                hotShow:true
            });
            return
        }
        that.setData({
            hotShow:false
        });
        this.debounce(api.getData('/search',{keywords:e.detail.value},"GET",that.searchSu),1000,true);
    },
    searchSu(data){
        var that=this;
        that.setData({
            results:data.data.result.songs
        })
    },
    searchHot(e){
        var data=e.currentTarget.dataset;
        this.setData({
            value:data.id.first,
            hotShow:false
        })
        var that=this;
        this.debounce(api.getData('/search',{keywords:data.id.first},"GET",that.searchSu),1000,true)
    },
    linkTo(e){
        var data=e.currentTarget.dataset;
        wx.navigateTo({
            url: '/pages/play/play?id='+data.id.id,
        });
    }
});