import axios from 'axios';
import Vue from 'vue';
import { ENV } from '../service/env';
const isDev = process.env.VUE_APP_ENV === "development";

/**
 * 请求数据封装
 * @param url 请求地址
 * @param type 请求类型
 * @param params 请求参数
 */
export default async (url = "", params = {}, options = {}) => {
    let defaultOptions = {
        baseUrl: ENV.BASEURL, //基础url
        loading: false, //是否显示Loading
        method: "post", //请求方法
        needSign: false, //是否需要签名 
        enterSilence: true, //是否不再输出入参日志
        outputSilence: true, //是否不再输出出参日志
        needOpenId: true, //是否需要默认加上openId参数     
        ignoreError: false,//是否忽略错误以及提示   
    };
    Object.assign(defaultOptions, options);
    //    let  activityId = "5ce655f8166f5807ab14f421"
    //    let  userId  =  "20150227010000008482"
    if (!params.userId) {
        // params.userId = window.sessionStorage.getItem('userId');//添加用户id 
        params.userId = "20150227010000008482";//添加用户id
    }
    if (!params.activityId) {
        // params.activityId = window.sessionStorage.getItem('activityId');//添加活动id
        params.activityId = "5ce655f8166f5807ab14f421";//添加活动id
    }
    // if (defaultOptions.needOpenId) {
    //     //本地开发配上白名单opendId 测试和生产去掉
    //     if (process.env.VUE_APP_ENV === "development") {
    //         params.openid = params.openid || window.sessionStorage.getItem("openid") || "onRWL0ihufdBMFB06iwCNvEv1BeQ";
    //     } else {
    //         params.openid = params.openid || window.sessionStorage.getItem("openid");
    //     }
    // }
   
    
    if (isDev && !defaultOptions.enterSilence) {
        console.log("入参: " + JSON.stringify(params));
    }
    if (defaultOptions.loading) {
        Vue.prototype.$loading.show();
    }

    let response = await axios({
        url: defaultOptions.baseUrl + url,
        method: defaultOptions.method,
        data: JSON.stringify(params),
        headers: {
            'Content-Type': "application/json",
        },
        xhrFields: { withCredentials: true },
        dataType: "json"
    }).catch(err => {
        if (defaultOptions.loading) {
            Vue.prototype.$loading.hide();
        }
        if (defaultOptions.ignoreError) return;
        console.log(err.status)
        if (err.message.indexOf("Network Error") !== -1) {
            Vue.prototype.$toast({ message: "网络异常，请检查网络" });
        }
        throw Error(err.message);
    });
    if (defaultOptions.loading) {//对于有loading层的接口加入300ms延迟防止闪屏
        await new Promise(res => setTimeout(res, 300))
    }
    
    if (response.status == 200) {
        let data = response.data || { retInfo: "系统错误" };
        if (defaultOptions.loading) {
            Vue.prototype.$loading.hide();
        }
        if (defaultOptions.ignoreError) return data;
        if (data.retCode === 'SUCCESS') {
            return data;
        } else {
            Vue.prototype.$toast({ message: data.retInfo });
            throw Error(JSON.stringify(data));
        }
    } else {
        if (defaultOptions.ignoreError) return response.status;
        Vue.prototype.$toast({ message: response.status });
        throw Error(response.status);
    }
}