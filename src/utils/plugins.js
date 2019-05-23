
/**
 * @desc vue 插件挂载 
 */
import { Toast } from "mint-ui";
import Loading from "@/components/common/Loading";
export default {
    install(Vue) {
        this.initLoading(Vue);
        this.initToast(Vue);
    },
    /**
     * 初始化toast
     * 封装为Promise形式
     */
    initToast(Vue) {
        Vue.prototype.$toast = (options) => {
            options.duration=options.duration || 1500;//默认时长设置为1.5s
            return new Promise((resolve) => {
                Toast(options);
                setTimeout(() => {
                    resolve();
                }, options.duration);
            })
        };
    },
    /**
     * 初始化loading
     */
    initLoading(Vue) {
        const el = document.createElement("div");
        el.id = "loading_el";
        document.querySelector("body").appendChild(el);
        const loading = Vue.extend(Loading)
        const dom = new loading().$mount("#loading_el")
        Vue.prototype.$loading = dom;
    }
}