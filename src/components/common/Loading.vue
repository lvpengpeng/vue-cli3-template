<template>
    <div class="container">
        <div class="loading" id="loading" v-show="showLoading">
            <div class="loadingBox">
                <div class="imgBox">
                    <img src="//www.baidu.com/s?wd=java%e8%af%9e%e7%94%9f%e6%97%a5&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pcs">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showLoading: false
        }
    },
    methods: {
        show() {
            this.showLoading = true;
        },
        hide() {
           
            this.showLoading = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.loading {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100000000000000;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;

    .loadingBox {
        .imgBox {
            width: 3em;
            height: 3rem;
            border-radius: .5rem;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 2.5rem;
                height: 2.5rem;
            }
        }

    }
}
</style>
