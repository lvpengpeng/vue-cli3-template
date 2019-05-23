/**
 * 判断是否为空
 */
const isEmpty = (keys) => {
    if (typeof keys === "string") {
        keys = keys.replace(/"|&nbsp;|\\/g, '').replace(/(^\s*)|(\s*$)/g, "");
        if (keys == "" || keys == null || keys == "null" || keys === "undefined") {
            return true;
        } else {
            return false;
        }
    } else if (typeof keys === "undefined") { // 未定义
        return true;
    } else if (typeof keys === "number") {
        return false;
    } else if (typeof keys === "boolean") {
        return false;
    } else if (typeof keys == "object") {
        if (JSON.stringify(keys) == "{}") {
            return true;
        } else if (keys == null) { // null
            return true;
        } else {
            return false;
        }
    }
    if (keys instanceof Array && keys.length == 0) { // 数组
        return true;
    }
}

/*
 * 获取url参数
 */
const getUrlParam = (name) => {
    // console.log("ggg: "+window.location.hash);
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg) || window.location.hash.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}

/**
 * 是否被10整除
 * @param {*} number 
 */
const isTenMutiple = (number) => {
    let isTen = number % 10;
    if (isTen === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * 获取字符串长度
 * @param {*} str
 */
const getSLen = value => {
    let str = value.toString();
    /*eslint no-control-regex: "off"*/
    let cArr = str.match(/[^\x00-\xff]/ig);
    /*eslint no-control-regex: "off"*/
    return str.length + (cArr == null ? 0 : cArr.length);
}
/**
 * 生成uuid
 */
const uuid = () => {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    let uuid = s.join("");
    return uuid;
}
/**
 * @desc 产生指定长度随机数
 * @param {int} [length=32] 指定的长度
 * @return {number} 随机字符串
 */
const getRandomNum = (length = 32) => {
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let nums = "";
    for (var i = 0; i < length; i++) {
        var id = parseInt(Math.random() * 61);
        nums += chars[id];
    }
    return nums;
}

//缓存
const storage = {
    get(key, type = "session") {
        const storage = window[(type + "Storage")].getItem(key);
        try {
            return JSON.parse(storage)
        } catch (e) {
            console.error(e)
            return storage
        }
    },
    save(key, val, type = "session") {
        window[(type + "Storage")].setItem(key, JSON.stringify(val))
    },
    del(key, type = "session") {
        window[(type + "Storage")].removeItem(key)
    }
}

/**
 * @desc 加载vconsole调试器
 */
const initVconsole = () => {
    return new Promise((resolve, reject) => {
        const scriptDom = document.createElement("script")
        scriptDom.src = "https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js"
        document.body.insertBefore(scriptDom, document.querySelector("#app"))
        scriptDom.onload = () => {
            /* eslint-disable */
            new VConsole()
            /* eslint-disable */
            resolve()
        }
        scriptDom.onerror = () => {
            reject();
        }
    })

}
/**
 * @desc 传入一个 数字或者数值型字符串 补齐 0
 * @param {string} params 参数
 * @return {string}
 * @example zeroize(2)=>02 zeroize(11)=>11
 */
const zeroize = (params) => {
    const n = Number(params)
    if (n.toString() === "NaN") return params;
    return JSON.stringify(parseInt(n / 10)) + JSON.stringify(parseInt(n % 10))
}

/**
 * 检验数组包含项
 * @param {*} item 
 * @param {*} arr 
 */
const includesArray = (item, arr) => {
    return arr.includes(item)
}
/**
 * @desc 对象深拷贝  Map Set等新增数据结构会出问题
 * @example  child=deepCopy({a:1,b:{c:2,d:function(){console.log(this.c)},e:[{a:1},2]}}) 
 */
const deepCopy = (p, c) => {
    if (p === null || p === undefined || typeof p === "function" || typeof p === "symbol") return p;
    c = (c !== undefined && c !== null) ? c : p instanceof Array ? [] : {};
    for (let i in p) {
        if (typeof p[i] === "object" && p[i] !== null) {
            c[i] = (p[i] instanceof Array) ? [] : {};
            c[i] = deepCopy(p[i], c[i])
        } else {
            c[i] = p[i]
        }
    }
    return c
};

/**
 * 反转数组
 * @param {*} array 
 */
const reverseArr = (array) => {
    var newArr = [];
    for (var i = array.length - 1; i >= 0; i--) {
        // console.log(array[i]);
        newArr[newArr.length] = array[i];
    }
    return newArr;
}

/**
 * 删除最后一个数组
 */
const deleteArr = (array) => {
    let m = array.slice(0);
    m.pop();
    return m;
}

/**
 * 防抖函数
 * @param {Function} fn 函数
 * @param {Number} time 时间
 */
const _debounce = (fn, time) => {
    let delay = time || 1000;
    let timer;
    console.log(fn);
    console.log(typeof fn);
    return function () {
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    }
}

/**
 * 节流函数
 * @param {*} fn 
 * @param {*} time 
 */
const _throttle = (fn, time) => {
    let last, timer, interval = time || 1000;
    return function () {
        let args = arguments;
        let now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(this, args);
            }, interval);
        } else {
            last = now;
            fn.apply(this, args);
        }
    }

}
/*
 * 图片预加载
 */
const preLoadImage = (arr) => {
    var newImage = [],
        loadedImage = 0;
    var postAction = function () { };
    var arr = (typeof arr != "object") ? [arr] : arr;

    function imageLoadPost() {
        loadedImage++;
        if (loadedImage == arr.length) {
            postAction(newImage);
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newImage[i] = new Image();
        newImage[i].src = arr[i];
        newImage[i].onload = function () {
            imageLoadPost();
        };
        newImage[i].onerror = function () {
            imageLoadPost();
        }
    }
    return {
        done: function (f) {
            postAction = f || postAction;
        }
    }
}
/*
 * 设置标题
 */
const setTitle = (title) => {
    document.title = title;
    let mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
        let iframe = document.createElement("iframe");
        iframe.style.visibility = "hidden";
        if (process && process.env) {
            iframe.setAttribute("src", `${process.env.BASE_URL}/favicon.ico`);
        } else {
            iframe.setAttribute("src", `../favicon.ico`);
        }
        let iframeCallback = function () {
            setTimeout(function () {
                iframe.removeEventListener("load", iframeCallback);
                document.body.removeChild(iframe);
            }, 0);
        }
        iframe.addEventListener("load", iframeCallback);
        document.body.appendChild(iframe);
    }
}
/**
 * @desc 设置快应用标题
 * @param {string} title 快应用标题
 */
const setQuickPageTitle = (title) => {
    if (window.system && window.system.postMessage) {
        const params = {
            type: "onH5RouterChange",
            params: {
                title: title
            }
        };
        /**
         * 通讯信息
         */
        window.system.postMessage(JSON.stringify(params));
    }
    if (setTitle) setTitle(title);//在调用一次普通h5的settitle
}

function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}


export {
    setQuickPageTitle,
    isEmpty,
    getUrlParam,
    isTenMutiple,
    getSLen,
    uuid,
    getRandomNum,
    storage,
    setTitle,
    initVconsole,
    zeroize,
    includesArray,
    deepCopy,
    reverseArr,
    deleteArr,
    _debounce,
    _throttle,
    isWeiXin,
    preLoadImage
}