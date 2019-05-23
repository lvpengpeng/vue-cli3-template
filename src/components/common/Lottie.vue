<template>
    <div class="lottie p-f full l-0 t-0 z-idx-1000000" ref="lottie"></div>
</template>

<script>
    import "@/assets/js/animation.js";
    import animationDataSelf from "@/assets/js/animationDataSelf"; //为自己助力数据

    export default {
        props: {
            isSelf: {
                type: Boolean,
                default: false
            } //是否是为自己助力
        },
        data() {
            return {
                templateCode: ""
            };
        },
        async mounted() {
            this.templateCode =
                window.sessionStorage.getItem("templateCode") ||
                this.$route.query.templateCode;
          
            // 文字  img_0是为别人点,img_4是为自己点
            animationDataSelf.assets[0].p = this.isSelf
                ? this.getImagePath("img_4.png")
                : this.getImagePath("img_0.png");
            // 点赞或者助力成功文字
            animationDataSelf.assets[1].p = this.getImagePath("img_1.png");
            // 红心
            animationDataSelf.assets[2].p = this.getImagePath("img_2.png");
            // 蓝底
            animationDataSelf.assets[3].p = this.getImagePath("img_3.png");
            var params = {
                //他人助力成功
                container: this.$refs.lottie,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animationDataSelf
            };

            // var param2 = {
            //     //自己助力成功
            //     container: this.$refs.lottie,
            //     renderer: "svg",
            //     loop: true,
            //     autoplay: true,
            //     animationData: animationDataSelf
            // };
            await this.$nextTick();
            window.lottie.loadAnimation(params);
        },
        methods: {
            getImagePath(path) {
                return `${process.env.BASE_URL}event${
                    this.templateCode}/images/page/${path}`;
            }
        }
    };
</script>
