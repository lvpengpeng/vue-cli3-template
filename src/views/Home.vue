<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getActivityInfo } from "../service/api/home";
export default {
    name: "home",
    components: {
        HelloWorld
    },
    // beforeRouteEnter(to, from, next) {
    //     next(async vm => {
    //         let {
    //             phoneBrand,
    //             userId = window.sessionStorage.getItem("userId"), //默认值取本地缓存
    //             activityId = window.sessionStorage.getItem("activityId"), //默认值取本地缓存
    //             templateCode = 520
    //         } = vm.$route.query;
    //         vm.phoneBrand = phoneBrand;
    //         window.sessionStorage.setItem("templateCode", templateCode); //缓存活动code
    //         vm.templateCode = templateCode;
    //         if (process.env.VUE_APP_ENV === "development") {
    //             //测试环境假用户信息
    //             //本地环境写一个死的'
    //             if (!activityId) {
    //                 activityId = "5cd3c9238ef2a219b4b62f89";
    //             }

    //             if (!userId) {
    //                 userId = "20160523010000000252745";
    //             }
    //         }
    //         window.sessionStorage.setItem("activityId", activityId);
    //         window.sessionStorage.setItem("userId", userId);
    //         vm.userId = userId;
    //         vm.activityId = activityId;
    //         await vm.init();
    //         await vm.$nextTick();
    //         document.documentElement.scrollTo(0, 0);
    //         window.scrollTo(0, 0);

    //         if (!window.sessionStorage.getItem("hasLoaded")) {
    //             console.log(window.location.href);
    //             window.sessionStorage.setItem("hasLoaded", "1");
    //             phoneInvoke(null, null, vm.phoneBrand).then(res => {
    //                 console.log(res, "手机埋点成功");
    //             });
    //         }
    //     });
    // },
    async created() {
        const user = {
            activityId: "5ce655f8166f5807ab14f421",
            userId: "20150227010000008482"
        };
        const { activityInfo } = await getActivityInfo();
        console.log(activityInfo);
    }
};
</script>
