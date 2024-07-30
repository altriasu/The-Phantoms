<template>
    <div class="news-swiper fl">
        <!-- 轮播图 -->
        <ul class="swiper-wrapper">
            <li>
                <a>
                    <img :src="currentBanner" alt="" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
name: "BannerChange",
data() {
    return {
    banners: [
        require('../assets/images/banner1.jpg'),
        require('../assets/images/banner2.jpg'),
        require('../assets/images/banner3.jpg'),
        require('../assets/images/banner4.jpg'),
        require('../assets/images/banner5.jpg'),
    ],
    currentIndex: 0,
    timer: null
    };
},
computed: {
    currentBanner() {
    return this.banners[this.currentIndex];
    },
},
methods: {
    changeBanner() {
        this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    },
    startBannerRotation() {
        this.timer = setInterval(this.changeBanner, 5000); // 每5秒更换一次Banner
    },
    stopBannerRotation() {
        clearInterval(this.timer);
    }
},
mounted() {
    this.startBannerRotation();
},
beforeUnmount() {
    this.stopBannerRotation();
},
};
</script>

<style scoped>
p {
  margin: 0px;
}
ul {
  margin: 0px;
  padding: 0px;
}
</style>
  