
/**
 * 设置标题
 * @param {*} title 
 */
const setPageTitle = (title) => {
    document.title = title;
    // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        const hackIframe = document.createElement('iframe');
        hackIframe.style.display = 'none';
        hackIframe.setAttribute("src", `/favicon.ico`);
        document.body.appendChild(hackIframe);
        setTimeout(()=> {
            document.body.removeChild(hackIframe)
        }, 300)
    }
}

const setdDataTitle = (typeId) => {
    switch (typeId) {
        case "1":setPageTitle("血糖数据");break;
        case "2":setPageTitle("血压数据");break;
        case "3":setPageTitle("血脂数据");break;
        case "4":setPageTitle("冠心病数据");break;
        case "5":setPageTitle("肥胖数据");break;
        case "6":setPageTitle("通风数据");break;
        case "7":setPageTitle("骨质疏松数据");break;
        default:setPageTitle("数据");break;
    }
}

export {
    setPageTitle,
    setdDataTitle
}