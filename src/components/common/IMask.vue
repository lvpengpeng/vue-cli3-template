<template>
    <div class="mask-container" v-show="visible">
        <!-- 遮罩层 -->
        <!--  @after-leave="$emit('update:visible',false)" -->
        <transition
            :name="transitionName"
            @after-leave="$emit('update:visible',false)"
            mode="out-in"
        >
            <div class="mask-content " v-if="isMaskShow">
                <!-- 内容区域 -->
                <div class="mask-body" :style="bodyStyle">
                    <!-- 头部插槽 关闭按钮 -->
                    <header class="mask-header" v-if="showHeader">
                        <slot name="header">
                            <img
                                src="@/assets/images/icon/btn_gb@2x.png"
                                alt
                                @click="handleCloseTap"
                                class="close"
                            >
                        </slot>
                    </header>
                    <!-- 主要区域插槽 -->
                    <main class="mask-main" ref="main" :style="mainStyle">
                        <slot></slot>
                    </main>
                    <!-- 底部插槽 -->
                    <footer class="mask-footer" :style="footerStyle">
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    let scroll = (function(className) {
        let scrollTop;
        return {
            afterOpen: function() {
                scrollTop =
                    document.scrollingElement.scrollTop || document.body.scrollTop;
                document.body.classList.add(className);
                document.body.style.top = -scrollTop + "px";
            },
            beforeClose: function() {
                document.body.classList.remove(className);
                document.scrollingElement.scrollTop = scrollTop;
                document.body.scrollTop = scrollTop;
            }
        };
    })("htf_scroll");
    export default {
        props: {
            visible: {
                //mask遮罩可见性 支持.sync
                type: Boolean,
                default: false
            },
            showHeader: {
                //是否渲染header
                type: Boolean,
                default: false
            },
            bodyStyle: {
                //中心白色区域Style名
                type: Object
            },
            mainStyle: {
                //中间区域Style(header以下 footer以上)
                type: Object
            },
            footerStyle: {
                //底部 内容区域Style
                type: Object
            },
            transitionName: {
                //mask显隐transition 组件name 支持slide |fade
                type: String,
                default: "slide"
            }
        },
        data() {
            return {
                isMaskShow: this.visible
            };
        },
        watch: {
            async visible(n) {
                if (n) {
                    scroll.afterOpen();
                } else {
                    scroll.beforeClose();
                }
                await this.$nextTick();
                this.isMaskShow = n;
            }
        },
        mounted() {
            // document.body.addEventListener("scroll",e=>{
            //     console.log(e)
            //     e.preventDefault()
            // },{passive:true})

            window.onresize = async () => {
                //防止 report 页面横屏进来生成海报后竖屏页面body的top值不正确
                if (this.visible) {
                    scroll.afterOpen();
                }
            };
        },
        methods: {
            /**
             * 关闭弹窗
             */
            handleCloseTap() {
                this.isMaskShow = false;
                setTimeout(() => {
                    this.$emit('update:visible',false)
                }, 250);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .mask-container {
        height: 100%;
        width: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(37, 37, 37, 0.6);

        // 海报
        .mask-content {
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            .mask-body {
                display: flex;
                flex-direction: column;
                background-color: #fff;
                border-radius: 0.3rem;
                width: 15rem;
                height: 22.35rem;
                position: relative;
                .mask-header {
                    display: flex;
                    justify-content: flex-end;
                    padding: 0.5rem 0.5rem 0.55rem;
                    flex-shrink: 0;

                    img {
                        width: 1.3rem;
                        height: 1.3rem;
                    }
                }

                .mask-main {
                    flex-grow: 1;
                    overflow: scroll;
                    // position: relative;
                }
            }
        }

        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 0.2s;
        }

        .fade-enter,
        .fade-leave-to {
            opacity: 0;
        }

        .slide-enter-active,
        .slide-leave-active {
            transition: all 0.5s cubic-bezier(0.4, 0, 0, 1);
        }

        .slide-enter,
        .slide-leave-active {
            opacity: 0;
            transform: translate3d(0, -20%, 0);
        }
    }
</style>
