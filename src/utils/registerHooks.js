//注册全局路由导航守卫
// class-component-hooks.js
import Component from 'vue-class-component';
const registerHooks = () => {
    // Register the router hooks with their names
    Component.registerHooks([
        'beforeRouteEnter',
        'beforeRouteLeave',
        'beforeRouteUpdate' // for vue-router 2.2+
    ])
}
export default  registerHooks