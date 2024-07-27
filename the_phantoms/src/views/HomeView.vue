<template>
<div>
    <div class="main">
        <!-- 海报墙 -->
        <div class="poster">
            <!-- 海报墙背景视频 -->
            <div class="bg-video">
                <video src="https://ys.mihoyo.com/main/_nuxt/videos/bg.3e78e80.mp4" width="100%" height="100%" autoplay
                    loop muted></video>
            </div>
            <!-- 召唤层 -->
            <!-- 下载游戏层 -->
            <div class="download">
                <!-- 这是播放按钮的显示 -->
                <!-- start -->
                <div class="play-btn">
                    <div class="play-btn-box-img">
                        <div class="play-btn-img">
                          <audio :src="require('../assets/images/homeview/bgm-music.mp3')" controls="controls" loop="loop" autoplay="autoplay" hidden="true" ></audio>
                        </div>
                    </div>
                </div>
                <!-- end -->
                <!-- 下载按钮 -->
                <!-- start -->
                <div class="down-types clear">
                    <!-- 二维码 -->
                    <div class="qrcode fl">
                        <!-- <img :src="../assets/images/homeview/d-qrcode.jpeg") alt="" /> -->
                    </div>
                    <!-- APP下载 -->
                    <!-- 云原神 -->
                    <!-- start -->
                    <div class="cloud-ys fl">
                        <!-- <a href="#">
                            <img :src="../assets/images/homeview/d-web-cloud.png" alt="" class="cloud-ys-object" />
                            <img :src="d-web-cloud-model.png" alt="" class="cloud-ys-model" />
                        </a> -->
                    </div>
                    <!-- end -->
                    <!-- 这个是云原神右边第一个盒子 -->
                    <!-- start -->
                    <div class="app-download fl">
                        <!-- 这个是ps下载盒子 -->
                        <!-- <a href="#">
                            <img src="../assets/images/homeview/d-ps.png" alt="ps-ys" class="img1" />
                            <img src="../assets/images/homeview/d-ps-modal.png" alt="ps-ys-model" class="img2" />
                        </a> -->
                        <!-- 这个是iOS下载盒子 -->
                        <!-- <a href="#">
                            <img src="../assets/images/homeview/d-ios.png" alt="ios-ys" class="img1" />
                            <img src="../assets/images/homeview/d-ios-modal.png" alt="ios-ys-model" class="img2" />
                        </a> -->
                    </div>
                    <!-- end -->
                    <!-- 这个是云原神右边第一个盒子的右边的一个盒子 -->
                    <!-- start -->
                    <div class="app-download fl">
                        <!-- 这个是taptap下载盒子 -->
                        <!-- <a href="#">
                            <img src="../assets/images/homeview/d-tap.png" alt="tap-ys" class="img1" />
                            <img src="../assets/images/homeview/d-tap-modal.png" alt="tap-ys-model" class="img2" />
                        </a> -->
                        <!-- 这个是安卓下载盒子 -->
                        <!-- <a href="#">
                            <img src="../assets/images/homeview/d-android.png" alt="andriod-ys" class="img1" />
                            <img src="../assets/images/homeview/d-android-modal.png" alt="android-ys-model" class="img2" />
                        </a> -->
                    </div>
                    <!-- end -->
                    <!-- pc下载盒子 -->
                    <!-- start -->
                    <div class="pc-download fr">
                        <!-- <a href="#">
                            <img src="../assets/images/homeview/d-pc.png" class="pc-ys" />
                            <img src="../assets/images/homeview/d-pc-modal.png" class="pc-ys-model" />
                        </a> -->
                    </div>
                    <!-- end -->
                    <!-- end -->
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
                新闻资讯
            </h3>
            <!-- end -->

            <!-- 主功能区 -->
            <div class="news-main clean">
                <div class="news-swiper fl">
                    <!-- 轮播图 -->
                    <ul class="swiper-wrapper">
                        <li>
                            <a>
                                <img :src="require('../assets/images/homeview/banner1.jpg')" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img :src="require('../assets/images/homeview/banner2.jpg')" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img :src="require('../assets/images/homeview/banner3.jpg')" alt="" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img :src="require('../assets/images/homeview/banner4.jpg')" alt="" />
                            </a>
                        </li>
                    </ul>
                    <!-- 指示器 -->
                    <ol class="dot clean">
                        <li class="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </div>

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
                                    <p class="news-title-ellipsis">《原神》「神铸赋形」活动祈愿现已开启，「长柄武器·薙草之稻光」「弓·飞雷之弦振」概率UP！</p>
                                    <span class="news-date">2024-01-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="news-item clean">
                                    <p class="news-title-ellipsis">《原神》「焰色天河」活动祈愿现已开启</p>
                                    <span class="news-date">2024-01-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="news-item clean">
                                    <p class="news-title-ellipsis">《原神》「影寂天下人」活动祈愿现已开启</p>
                                    <span class="news-date">2024-01-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="news-item clean">
                                    <p class="news-title-ellipsis">夏沃蕾生日快乐｜中午好，我正打算去特巡队食堂吃饭，要一起吗？</p>
                                    <span class="news-date">2024-01-29</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="news-item clean">
                                    <p class="news-title-ellipsis">《原神》拾枝杂谈-「夏沃蕾：遵行为要」</p>
                                    <span class="news-date">2024-01-29</span>
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

        <!-- 原神城市介绍 -->
        <!-- start -->
        <div class="city">
            <ul class="city-list">
                <li class="city-list-item city-list-item1">
                    <div class="city-border"></div>
                    <div class="city-list-bg"></div>
                    <a href="#">
                        <p>蒙德城</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a>
                    <div class="city-list-char"><img :src="require('../assets/images/homeview/h1.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
                <li class="city-list-item city-list-item2">
                    <div class="city-border"></div>
                    <div class="city-list-bg-1"></div>
                    <a href="#">
                        <p>璃月港</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a>
                    <div class="city-list-char"><img :src="require('../assets/images/homeview/h2.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
                <li class="city-list-item city-list-item3">
                    <div class="city-border"></div>
                    <div class="city-list-bg-2"></div>
                    <a href="#">
                        <p>稻妻城</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a>
                    <div class="city-list-char"><img :src="require('../assets/images/homeview/h3.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
                <li class="city-list-item city-list-item4">
                    <div class="city-border"></div>
                    <div class="city-list-bg-3"></div>
                    <a href="#">
                        <p>须弥城</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a>
                    <div class="city-list-char"><img :src="require('../assets/images/homeview/h4.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
                <li class="city-list-item city-list-item5">
                    <div class="city-border"></div>
                    <div class="city-list-bg-4"></div>
                    <a href="#">
                        <p>枫丹城</p>
                        <img :src="require('../assets/images/homeview/title-decoration.png')" alt="" />
                    </a>
                    <div class="city-list-char"><img :src="require('../assets/images/homeview/h5.png')" alt="" /></div>
                    <div class="city-list-mask"></div>
                </li>
                <!-- <li class="city-list-item6"> -->
                <!-- <div class="city-border"></div> -->
                <!-- <div class="city-list-bg-wait"></div> -->
                <!-- <a href="#"> -->
                <!-- <p>敬请期待</p> -->
                <!-- <img src="/img/title-decoration.png" alt="" /> -->
                <!-- </a> -->
                <!-- <div class="city-list-char"></div> -->
                <!-- <div class="city-list-mask"></div> -->
                <!-- </li> -->
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
    <div class="sideBar">
        <!-- 箭头盒子 -->
        <div class="arrow-icon-box">
            <div class="arrow-icon">
            </div>
        </div>

        <div class="content">
            <!-- 上部分 -->
            <div class="content-top">
                <p class="about">关注我们</p>
                <img :src="require('../assets/images/homeview/sidebar-qrcode.png')" alt="" />
                <p class="scan-code">扫码关注微信</p>
            </div>
            <!-- 下部分 -->
            <div class="content-bottom">
                <div class="item clean">
                    <span class="iconfont icon-weibo"></span>
                    <span class="text">官方微博</span>
                </div>
                <div class="item clean">
                    <span class="iconfont icon-Tap"></span>
                    <span class="text">TapTap</span>
                </div>
                <div class="item clean">
                    <span class="iconfont icon-cat_help"></span>
                    <span class="text">官方社区</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import 'jquery/dist/jquery';

export default {
  name: 'HomeView',
  mounted() {
    // var music = document.querySelectorAll("#music-icon");
    // new Audio("../assets/images/homeview/bgm-music.mp3"); 
  
    // 鼠标点击事件
    // music.onclick = function () {
    // }
    // end

    // 侧边栏点击收起事件
    // 找到侧边栏所有元素
    var sidebar = document.querySelector(".sideBar");
    // 找到需要点击的icon,响应鼠标点击事件
    var arrowIconBox = document.querySelector(".arrow-icon-box");

    // 鼠标点击事件
    arrowIconBox.onclick = function () {
        // dom对象.classList.toggle("指定类名") 有这个指定类名就会帮我们删除这个类名,如果没有这个指定类名,就会帮我们创建类名
        sidebar.classList.toggle("folding");
    }

      
  },
  setup() {
    const play_audio = () => {

    }

    return {
      play_audio,
    }
  }
}
</script>

<style scoped>
@import url('../assets/css/homeview/base.css');
@import url('../assets/css/homeview/style.css');
p {
  margin-bottom: 0px;
}
ul {
  margin: 0px;
  padding: 0px;
}
</style>
