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

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//rem适配
// import './utils/rem';
Vue.config.productionTip = false;

if (process.env.VUE_APP_ENV === "production") {//线上生产版本每次打印最后一次提交的时间
	console.log("lastModify:" + process.env.VUE_APP_LASTMODIFY);
	createVue();
	/*eslint-disable */
} else if (true && (process.env.VUE_APP_ENV === "test" || process.env.VUE_APP_ENV === "development")) {//线上测试版本展示vconsole 并且 vue-devtools可调式
	// true 可以直接短路这个判断条件执行else
	Vue.config.devtools = true;
	initVconsole().then(() => {
		console.log("lastModify:" + process.env.VUE_APP_LASTMODIFY, process.env.VUE_APP_ENV);
		createVue();
	});
} else {
	createVue();
}

function createVue() {
	window.onerror = function (...args) {
		console.log("捕获到异常", args)
	}

	Vue.config.productionTip = false;
	//创建实例
	new Vue({
		router,
		store,
		render: h => h(App)
	}).$mount('#app');
}