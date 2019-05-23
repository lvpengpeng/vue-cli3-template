/**
 * 自定义touch事件
 * @param el
 * @param binding
 * @param type
 * @param vnode
 */
function vueTouch(el, binding, type, vnode) {
    this.obj = el;
    this.binding = binding;
    this.touchType = type;
    this.vueTouches = {x:0,y:0};
    vnode.key = this.randomString();
    this.callBack=binding.value;
    this.obj.addEventListener('touchstart',(e)=>{
        this.start(e);
    });
    this.obj.addEventListener('touchend',(e)=>{
        this.end(e);
    })
}

vueTouch.prototype = {
    start: function (e) {
        e.preventDefault();
        this.vueTouches = {x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY};

    },
    end:function (e) {
        var x = e.changedTouches[0].pageX - this.vueTouches.x;
        var y = e.changedTouches[0].pageY - this.vueTouches.y;
        //判断方向
        if(Math.abs(x) > Math.abs(y) && x > 0){
            this.touchType = "swiperight" && this.callBack(e);
        }else if(Math.abs(x) > Math.abs(y) && x < 0){
            this.touchType = "swipeleft" && this.callBack(e);
        }else if(Math.abs(x) < Math.abs(y) && y > 0){
            this.touchType = "swipeup" && this.callBack(e);
        }else if(Math.abs(x) < Math.abs(y) && y < 0){
            this.touchType = "swipedown" && this.callBack(e);
        }else {
            this.touchType = "tap" && this.callBack(e);
        }
    },
    randomString:function(){
        var len = 10;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }
}

export default {
    install:function (Vue,options) {
        Vue.directive('swipeleft',{
            bind:function (el,binding,vnode) {
                new vueTouch(el,binding,"swipeleft",vnode);
            }
        });
        Vue.directive('swiperight',{
            bind:function (el,binding,vnode) {
                new vueTouch(el,binding,"swiperight",vnode);
            }
        });
        Vue.directive('swipeup',{
            bind:function (el,binding,vnode) {
                new vueTouch(el,binding,"swipeup",vnode);
            }
        });
        Vue.directive('swipedown',{
            bind:function (el,binding,vnode) {
                new vueTouch(el,binding,"swipedown",vnode);
            }
        });
        Vue.directive('tap',{
            bind:function (el,binding,vnode) {
                new vueTouch(el,binding,"tap",vnode);
            }
        });
    }
}