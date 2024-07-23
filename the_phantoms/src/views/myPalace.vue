<template>
    <BaseContent>
        <div class="row">
            <div class="col-4" style="width: 366px">
                <CardPerson @follow="follow" @unfollow="unfollow" :user="user"/>
                <UserWrite @but_click="but_click" />
            </div>
            <div class="col-8" style="width: 100% - 366px">
                <UserPost :posts="posts" />
            </div>
        </div>
    </BaseContent>
</template>

<script>
import CardPerson from '../components/cardPerson.vue';
import BaseContent from '../components/baseContent.vue';
import UserWrite from '@/components/userWrite.vue';
import UserPost from '@/components/userPost.vue';
import { reactive } from 'vue';

export default{
    name: "MyPalace",
    components: {
        BaseContent,
        CardPerson,
        UserWrite,
        UserPost
    },

    setup(){
        const user = reactive({
            id: 1,
            username: "新岛真",
            lv: 5,
            followCount: 724,
            followerCount: 3300,
            praiseCount: 9320,
            personIntroduce: "铁拳制裁",
            is_followed: false
        })

        const posts = reactive({
            count: 3,
            posts:[
                {
                    id: 1,
                    userId: 1, 
                    content: "p5r天下第一"
                },
                {
                    id: 2,
                    userId: 1,
                    content: "暗喻幻想好想玩"
                },
                {
                    id: 3,
                    userId: 1,
                    content: "p4快点重置吧"
                }
            ]
        })

        const follow = () => {
            if (user.is_followed) return;
            user.is_followed = true;
            user.followerCount ++;
        }

        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followerCount --;
        }

        const but_click = (content) => {
            posts.count ++;
            posts.posts.unshift({
                id: posts.count,
                userId: 1,
                content: content
            })
        }

        return {
            user,
            posts,
            follow,
            unfollow,
            but_click
        }
    }
}
</script>

<style scoped></style>