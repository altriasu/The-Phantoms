<template>
<div>
    <div class="main">
        <!-- 海报墙 -->
        <div class="poster">
            <!-- 海报墙背景视频 -->
            <div class="bg-video">
                <video :src="require('../assets/videos/poster.mp4')" width="100%" height="100%" autoplay
                    loop muted poster></video>
                <!-- <img src="../assets/images/citybg.jpg" alt=""/> -->
            </div>
            <!-- 召唤层 -->
            <!-- 下载游戏层 -->
            <div class="download">
                <!-- 这是播放按钮的显示 -->
                
                <!-- start -->
                <div class="play-btn">
                    <button @click="showVideoPopup" class="play-btn-box-img">
                        <div class="play-btn-img">
                          <audio v-if="!showVideo" :src="require('../assets/audios/Lyn - Take Over.mp3')" controls="controls" loop="loop" autoplay="autoplay" hidden="true" volume="0.2"></audio>
                        </div>
                    </button>
                    <transition name="fade">
                    <div v-if="showVideo" class="video-popup">
                        <div class="video-container">
                            <button @click="closeVideo" class="close-button"></button>
                            <video class="popupvedio" ref="videoPlayer" controls autoplay>
                            <source :src="require('../assets/videos/op.mp4')" type="video/mp4" />
                            您的浏览器不支持 HTML5 视频标签。
                            </video>
                        </div>
                    </div>
                    </transition>
                </div>
                <!-- end -->
                <!-- 下载按钮 -->
                <!-- start -->
                <div class="down-types clear">
                    <div class="qrcode fl"></div>
                    <div class="cloud-ys fl"></div>
                    <div class="app-download fl"></div>
                    <div class="app-download fl"></div>
                    <div class="pc-download fr"></div>
                </div>
                <!-- end -->
                <!-- css3的下移 -->
                <!-- start -->
                <div class="down-type">
                    <img :src="require('../assets/images/homeview/arrow.png')" alt="" class="down-type-1" />
                    <img :src="require('../assets/images/homeview/arrow.png')" alt="" class="down-type-2" />
                    <img :src="require('../assets/images/homeview/arrow.png')" alt="" class="down-type-3" />
                    <!-- <div class="down-type-1"></div>
                    <div class="down-type-2"></div>
                    <div class="down-type-3"></div> -->
                </div>
                <!-- end -->
            </div>
        </div>
        <!-- end -->

        <!-- 新闻页面 -->
        <!-- start -->
        <div class="news">
            <!-- 标题栏 -->
            <!-- start -->
            <h3>
                总攻击
            </h3> 
            <!-- end -->

            <!-- 主功能区 -->
            <div class="news-main clean">
                <BannerChange />

                <!-- 右边文字新闻 -->
                <div class="news-content fr">
                    <!-- 上部分新闻标签 -->
                    <div class="news-tab-list clean">
                        <span class="news-tab-item">最新</span>
                        <span>新闻</span>
                        <span>公告</span>
                        <span>活动</span>
                    </div>

                    <!-- 下部分新闻 -->
                    <div class="news-down-list">
                        <ul class="news-list">
                            <li>
                                <a href="#" class="news-item clean">
                                    <p class="news-title-ellipsis">因某个缘由转学到“东京”的高中后，开始做起了奇异的梦。</p>
                                    <span class="news-date">2019-10-31</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="news-item clean">
                                    <p class="news-title-ellipsis"> ——你确实是命运之“囚”啊。</p>
                                    <span class="news-date">2019-10-31</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="news-item clean">
                                    <p class="news-title-ellipsis">被告知不久之后他就会迎来毁灭。</p>
                                    <span class="news-date">2019-10-31</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="news-item clean">
                                    <p class="news-title-ellipsis">为了完成赋予他的“更生”任务，也为了将人们从邪恶欲望中拯救出来，</p>
                                    <span class="news-date">2019-10-31</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="news-item clean">
                                    <p class="news-title-ellipsis"> 等待你的将是……？</p>
                                    <span class="news-date">2019-10-31</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- 查看全部资讯 -->
                    <!-- start -->
                    <a href="#" class="viewAll">
                        <div class="plus-icon"></div>
                        查看全部资讯
                    </a>
                    <!-- end -->
                </div>
            </div>
        </div>
        <!-- end -->

        <!-- start -->
        <div class="city">
            <ul class="city-list">
                <li class="city-list-item city-list-item1">
                    <div class="city-border"></div>
                    <div class="city-list-bg"></div>
                    <!-- <a href="#">
                        <p>新岛真</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a> -->
                    <div class="city-list-char"><img :src="require('../assets/images/h1.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
                <li class="city-list-item city-list-item2">
                    <div class="city-border"></div>
                    <div class="city-list-bg-1"></div>
                    <!-- <a href="#">
                        <p>佐仓双叶</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a> -->
                    <div class="city-list-char"><img :src="require('../assets/images/h2.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
                <li class="city-list-item city-list-item3">
                    <div class="city-border"></div>
                    <div class="city-list-bg-2"></div>
                    <!-- <a href="#">
                        <p>芳泽堇</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a> -->
                    <div class="city-list-char"><img :src="require('../assets/images/h3.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
                <li class="city-list-item city-list-item4">
                    <div class="city-border"></div>
                    <div class="city-list-bg-3"></div>
                    <!-- <a href="#">
                        <p>奥村春</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a> -->
                    <div class="city-list-char"><img :src="require('../assets/images/h4.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
                <li class="city-list-item city-list-item5">
                    <div class="city-border"></div>
                    <div class="city-list-bg-4"></div>
                    <!-- <a href="#">
                        <p>高卷杏</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a> -->
                    <div class="city-list-char"><img :src="require('../assets/images/h5.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
            </ul>
        </div>
        <!-- end -->
        <!-- 等待盒子 -->
        <!-- <div class="wait">
            <div class="mask">敬请期待</div>
        </div> -->
    </div>

    <!-- 底部脚 -->
    <!-- start -->
    <div class="footer">
        <!-- 社交条 -->
        <div class="footer-socialbar">
            <a href="#"><img :src="require('../assets/images/homeview/weibo-icon.png')" alt="微博" /></a>
            <a href="#"><img :src="require('../assets/images/homeview/weixin-icon.png')" alt="微信" /></a>
            <a href="#"><img :src="require('../assets/images/homeview/qq-icon.png')" alt="QQ" /></a>
            <a href="#">
                <img :src="require('../assets/images/homeview/fenxiang-icon.png')" alt="分享" />
                <div class="fenxiang">
                    <p>分享至</p>
                    <span class="icon icon-qqzeone"></span>
                    <span class="icon icon-qq"></span>
                    <span class="icon icon-weibo"></span>
                    <span class="icon icon-tieba"></span>
                </div>
            </a>
        </div>
        <!-- 底部内容层 -->
    </div>
    <!-- end -->

    <!-- 侧边栏 -->
    <!-- start -->
    <transition name="fade">
    <div v-if="scrolledDown" class="sideBar">
        <!-- 箭头盒子 -->
        <div class="arrow-icon-box">
            <div class="arrow-icon">
            </div>
        </div>

        <div  class="content">
            <!-- 上部分 -->
            <div class="content-top">
                <p class="about">关注我们</p>
                <img :src="require('../assets/images/blog.png')" alt="" />
                <p class="scan-code">扫码关注</p>
            </div>
            <!-- 下部分 -->
            <div class="content-bottom">
                <div class="item clean">
                    <span class="iconfont icon-weibo"></span>
                    <span class="text">SEGA</span>
                </div>
                <div class="item clean">
                    <span class="iconfont icon-Tap"></span>
                    <span class="text">ATLUS</span>
                </div>
                <div class="item clean">
                    <span class="iconfont icon-cat_help"></span>
                    <span class="text">官方社区</span>
                </div>
            </div>
        </div>
    </div>
    </transition>
</div>
</template>

<script>
import BannerChange from '@/components/bannerChange.vue';
import 'jquery/dist/jquery';

export default {
  name: 'HomeView',
  components: {
    BannerChange,
  },
  data() {
    return {
        showVideo: false, 
        scrolledDown: false
    };
  },
  methods: {
    showVideoPopup() {
        this.showVideo = true;
        document.body.style.overflow = 'hidden'; // 禁止页面滚动
        this.$nextTick(() => {
            this.$refs.videoPlayer.play();
        });
    },
    closeVideo() {
        this.$refs.videoPlayer.pause();
        this.$refs.videoPlayer.currentTime = 0; // 重新设置视频播放时间为 0
        this.showVideo = false; // 隐藏视频弹出框
        document.body.style.overflow = 'auto'; // 恢复页面滚动
    },
    handleScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      this.scrolledDown = scrollPosition >= windowHeight;
      if (this.scrolledDown) {
        const arrowIconBox = document.querySelector(".arrow-icon-box");
        const sidebar = document.querySelector(".sideBar");
        if (arrowIconBox && sidebar) {
          arrowIconBox.onclick = function () {
            sidebar.classList.toggle("folding");
          }
        } 
      }
    }
  },
  setup() {
    
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    // 侧边栏点击收起事件
    // 找到侧边栏所有元素

    // 找到需要点击的icon,响应鼠标点击事件
    // dom对象.classList.toggle("指定类名") 有这个指定类名就会帮我们删除这个类名,如果没有这个指定类名,就会帮我们创建类名
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style scoped>
@import url('../assets/css/homeview/base.css');
@import url('../assets/css/homeview/style.css');
p {
  margin: 0px;
}
ul {
  margin: 0px;
  padding: 0px;
}

.video-popup {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.7);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
}

.video-container {
position: relative;
border-radius: 10px;
}

.close-button {
position: absolute;
width: 50px;
height: 50px;
top: 10px;
right: -85px;
background-image: url('../assets/images/homeview/icons.png');
background-color: rgba(189, 19, 19, 0);
background-position: 65px 90px;

border: none;
padding: 5px 10px;
cursor: pointer;
}

.popupvedio{
width: 896px;
height: 504px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
