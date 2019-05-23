/* eslint-disable */
import * as qiniu from 'qiniu-js';
import { uuid } from "./common.js";
//获取文件后缀
export const getFileName = (key2) => {//通过第一种方式获取文件名
    const pos = key2.lastIndexOf(".");//查找最后一个\的位置
    return key2.substring(pos); //截取最后一个\位置到字符长度，也就是截取文件名 houzhui
}

/**
 * 
 * @param {File} file 文件对象 
 * @param {*} token 凭证
 * @param {*} putExtra 
 * @param {*} option 
 * @param {*} domain 暂时没用
 */
export const doUpload = (file, token, putExtra = {}, option, ) => {
    return new Promise(async (resolve, reject) => {
        const defaultOption = Object.assign({
            quality: 1,
            noCompressIfLarger: true
        }, option);
        const defaultputExtra = Object.assign({
            fname: "",
            params: {},
            mimeType: []
        }, putExtra)
        const key = uuid() + getFileName(file.name);
        defaultputExtra.params["x:name"] = key.split(".")[0];
        const data = await qiniu.compressImage(file, defaultOption)
        const observable = qiniu.upload(data.dist, key, token, putExtra, defaultOption);
        const observer = {
            next() {//上传中
            },
            error(err) {//错误
                reject(err);
                console.error(err);
            },
            complete(res) {//上传完成

                resolve(res);
            }
        }
        observable.subscribe(observer); // 上传开始
    })
}
/**
 * @desc 将file文件转化为base64
 */
export const readFileToBase64 = (file) => {
    return new Promise(resolve => {
        var reads = new FileReader();
        reads.readAsDataURL(file);
        reads.onload = function () {
            resolve(this.result)
        }
    })
}

export const getSvg=(str)=>{
    return str.split("data:image/svg+xml;charset=utf-8,")[1]
}
/**
 * @desc 将以base64的图片url数据转换为Blob用url方式表示的base64图片数据
 * @param {string} base64 base64编码
 * @return {Blob} 文件url
 *  
 */
export const convertBase64UrlToBlob = (base64) => {
    const bytes = window.atob(base64.split(",")[1]); //去掉url的头，并转换为byte
    var contentType = base64.split(';base64,')[0].split(':')[1];
    // var contentType = "image/svg";
    
    //处理异常,将ascii码小于0的转换为大于0
    const ab = new ArrayBuffer(bytes.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], { type:contentType });
  
}










