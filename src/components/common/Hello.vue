<template>
    <div class="container">
        {{msg}}
    </div>
</template>


<script>
import {
    Vue,
    Component,
    Watch,
    Prop
} from 'vue-property-decorator';
@Component({
    props:{
        // msg:{
        //     type:String,
        //     default:"haha"
        // }
    }
})
/**基于类的api写法 参考下方两个链接
 * @see https://github.com/vuejs/vue-class-component
 * @see https://github.com/kaorun343/vue-property-decorator
 */
class Hello extends Vue {
     @Prop({type:String,default:"haha"}) msg
     @Watch("msg")
     handleWatch(newVal,oldVal){
         console.log("prop msg changed to:"+newVal)
     }
}
export default Hello
</script>
