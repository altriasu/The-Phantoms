<template>
    <BaseContent>
        <div class="row">
            <div class="col-4" style="width: 366px">
                <CardPerson @follow="follow" @unfollow="unfollow" :user="user"/>
                <UserWrite v-if="is_me" @post_add="post_add" />
            </div>
            <div class="col-8" style="width: 100% - 366px">
                <UserPost @post_delete="post_delete" :user="user" :posts="posts" />
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
import {useStore} from 'vuex';
import {useRoute} from 'vue-router';
import {computed} from 'vue';

import $ from 'jquery';


export default{
    name: "MyPalace",
    components: {
        BaseContent,
        CardPerson,
        UserWrite,
        UserPost
    },

    setup(){
        const store = useStore();
        const route = useRoute();
        const userId = route.params.userId;

        let user = reactive({
            id: 1,
            username: "新岛真",
            lv: 5,
            followCount: 724,
            followerCount: 3300,
            praiseCount: 9320,
            personIntroduce: "铁拳制裁",
            is_followed: false,
            photo: require("../assets/images/personheadimg.jpg")
        });

        const posts = reactive({});

        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/getinfo/',
            type: "GET",
            data: {
                user_id: userId
            },
            headers: {
                'Authorization' : "Bearer " + store.state.user.access
            },
            success(resp){
                user.id = resp.id;
                user.followCount = 0;
                user.followerCount = resp.followerCount;
                user.is_followed = resp.is_followed;
                user.photo = resp.photo;
                user.username = resp.username;
                user.personIntroduce = "";
                user.praiseCount = 0;
            }
        })

        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/post/',
            type: "GET",
            data: {
                user_id: userId
            },
            headers: {
                'Authorization' : "Bearer " + store.state.user.access
            },
            success(resp) {
                posts.posts = resp;
                posts.count = resp.length;
            }
        })

        const follow = () => {
            if (user.is_followed) return;
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: userId
                },
                headers: {
                    'Authorization': 'Bearer ' + store.state.user.access
                },
                success(resp){
                    if (resp.result === "success"){
                        user.is_followed = true;
                        user.followerCount ++;
                    }
                }
            })
        }

        const unfollow = () => {
            if (!user.is_followed) return;
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: userId
                },
                headers: {
                    'Authorization': 'Bearer ' + store.state.user.access
                },
                success(resp){
                    if (resp.result === "success"){
                        user.is_followed = false;
                        user.followerCount --;
                    }
                }
            })  
        }

        const post_add = (content) => {
            posts.count ++;
            posts.posts.unshift({
                id: posts.count,
                userId: 1,
                content: content
            })
        }

        const post_delete = (post_id) => {
            posts.posts = posts.posts.filter(post => post.id !== post_id);
            posts.count = posts.posts.length;
        }

        const is_me = computed(() => userId == store.state.user.id);

        return {
            user,
            posts,
            follow,
            unfollow,
            post_add,
            is_me,
            post_delete
        }
    }
}
</script>

<style scoped></style>