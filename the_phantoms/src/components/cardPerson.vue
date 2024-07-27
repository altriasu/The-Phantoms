<template>
    <div class="card">
        <div class="backgroundimg">
            <img src="../assets/images/personbg.jpg" alt="" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="userbody">
            <div class="haedimg">
                <img :src="user.photo" alt="">
            </div>
            <div class="person-info">
                <div class="person-info-text">
                    <div class="person-info-text-username">
                        {{ user.username }}
                        <span class="lv">LV</span><span class="num">{{ user.lv }}</span>
                    </div>
                    <div class="person-info-text-reputation">
                        <span class="text-introduce">
                            <span>{{ user.followCount }}</span> <span>关注</span>
                        </span>
                        <span class="text-introduce">
                            <span>{{ user.followerCount }}</span> <span>粉丝</span>
                        </span>
                        <span class="text-introduce">
                            <span>{{ user.praiseCount }}</span>
                            <span>获赞</span>
                        </span>
                    </div>
                    <div class="person-introduce">
                        {{ user.personIntroduce }}
                    </div>
                </div>
                <div class="person-info-button">
                    <button @click="follow" v-if="!user.is_followed" class="unfollow-button">+关注</button>
                    <button @click="unfollow" v-if="user.is_followed" class="follow-button">取消关注</button>
                    <button>发消息</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "CardPerson",
        props: {
            user:{
                type: Object,
                required: true,
            }
        },
        setup(props, context) { //props必须加，否则有context.emit is not a function报错
            const follow = () => {
                context.emit('follow');
            };

            const unfollow = () => {
                context.emit('unfollow')
            };

            return {
                follow,
                unfollow
            }
        }
    }
</script>

<style scoped>
.card {
    width: 366px;
    height: 247px;
    box-shadow: 2px 2px 5px lightgray;
    border-radius: 5px;
}

.backgroundimg {
    width: 366px;
    height: 85px;
}

.userbody {
    width: 366px;
    height: calc(100% - 85px);
    box-sizing: border-box;
}

.haedimg {
    width: 70px;
    height: 100%;
    float: left;
    text-align: center;
}

.haedimg>img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin: 10px
}

.person-info {
    width: calc(100% - 70px);
    height: 100%;
    float: left;
}

.person-info-text {
    width: 100%;
    height: calc(100% - 71px);
    /* background-color: brown; */
    box-sizing: border-box;
}

.person-info-text-username {
    width: 100%;
    height: 30px;
    font-size: 16px;
    color: #222222;
    font-weight: bold;
    margin: 10px 0px 0px 0px;
    padding: 5px 0px 0px 0px;
    /* background-color: azure; */
}

.lv {
    font-size: 9px;
    margin: 0px;
    padding: 0px;
    background-color: #EE672A;
    color: aliceblue;
    border-radius: 2px;
}

.num {
    font-size: 11px;
    margin: 0px;
    padding: 0px;
    background-color: #EE672A;
    color: aliceblue;
    border-radius: 2px;
}

.person-introduce {
    width: 100%;
    height: calc(100% - 55px);
    /* background-color: aquamarine; */
    box-sizing: border-box;
    padding: 5px 0px;
    font-size: 13px;
    color: #9499A0
}

.person-info-button {
    width: 100%;
    height: 61px;
    /* background-color: aqua; */
}

.text-introduce>span:nth-child(1) {
    font-size: 12px;
    color: #222222;
    font-weight: 500;
    margin-left: 2px;
}

.text-introduce>span:nth-child(2) {
    font-size: 12px;
    color: #9499A0;
    margin-left: 2px;
}

.person-info-button {
    margin: 0px;
    padding: 5px 0px;
    /* background-color: #EE672A; */
    box-sizing: border-box;
}

.person-info-button>button {
    width: 102px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin: 5px 0px;
}

.person-info-button>.unfollow-button {
    background-color: #00A1D6;
    color: white;
}

.person-info-button>.follow-button{
    background-color:#E3E5E7;
    color: #9499A0;
}

.person-info-button>button:nth-child(2) {
    background-color: white;
    border: #CCD0D7 solid 1px;
    color: #6D757A;
    margin-left: 7px;
}

.person-info-button>.unfollow-button:hover {
    background-color: #00B5E5;
    transition: 700ms;
}

.person-info-button>.follow-button:hover{
    background-color: #F1F2F3;
    transition: 700ms;
}


.person-info-button>button:nth-child(2):hover {
    border-color: #00b5e5;
    color: #00B5E5;
    transition: 700ms;
}


</style>