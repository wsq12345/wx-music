let app =  getApp();
var host = "http://10.0.0.13:3000";

export function getData(url,data,method,doSuccess){
    wx.request({
        url: host+url,
        data: data,
        header: {'content-type':'application/json'},
        method: method,
        dataType: 'json',
        responseType: 'text',
        success: (result)=>{
            doSuccess(result);
        },
        fail: ()=>{
        },
        complete: ()=>{}
    });
}

  