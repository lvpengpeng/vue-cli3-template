<template>
    <div>
        <input class="inpt" :id="name" :name="name" :class="className" :placeholder="placeholder"  v-model="_value" :type="type"   />
    </div>
</template>

<script>
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
let preVal;//记录上次输入的值
export default {
    data() {
        return {
            focus: false,

        };
    },
    computed: {
        _value: {
            get() {
                return this.value;
            },
            set(val) {
                preVal=this.value;
                this.$emit("input", val);
            }
        },
    },
    watch: {
        _value(n, o) {
            if(getSLen(this._value) > this.maxlength){
                  this._value=preVal;
            }
        }
    },
    props: {
        value: "",
        maxlength: {
            default: 1000
        },
        type: "",
        placeholder: "",
        className: "",
        name:""
    },
  
};
</script>

<style lang="scss">
input {
  width: 4.8rem;
  height: 1.8rem;
  text-align: center;
  margin-top: 1.4rem;
  font-size: 1.2rem;
  color: #252525;
  text-align: center;
  line-height: 1.8rem;
}

// .formInpt {
//   width: 100%;
//   padding-right: 0.75rem;
//   height: 100%;
//   position: relative;
//   line-height: normal;
//   input {
//     height: 100%;
//     width: 100%;
//     caret-color: rgb(4, 210, 166);

//     color: #333;
//     font-size: 0.75rem;

//     &::-webkit-input-placeholder {
//       color: #b9b9b9;
//       font-size: 0.75rem;
//     }
//   }
//   .closeImg {
//     position: absolute;
//     margin: auto;
//     top: 0;
//     bottom: 0;
//     right: 0%;
//     width: 0.75rem;
//     height: 0.75rem;
//     flex-shrink: 0;
//   }
// }
</style>
