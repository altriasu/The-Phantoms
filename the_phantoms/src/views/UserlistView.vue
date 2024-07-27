<template>
  <BaseContent>
    <div class="container">
        <div v-for="user in users" class="card" :key="user.id" @click="open_palace(user.id)">
            <div class="cardbody">
                <div class="row">
                    <div class="col-1"><img class="img-fluid" :src="user.photo" alt=""></div>
                    <div class="col-11">
                        <div class="username">{{ user.username }}</div>
                        <div class="followercount">{{ user.followerCount }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </BaseContent>
</template>

<script>
import BaseContent from '../components/baseContent.vue';
import $ from 'jquery';
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';

export default {
    name: 'UserListView',
    components:{
        BaseContent
    },
    setup() {
        let users = ref([]);
        const router = useRouter();
        const store = useStore();

        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
            type: "get",
            success(resp) {
                users.value = resp;
            }
        });

        const open_palace = (userId) => {
            if (store.state.user.is_login){
                router.push({
                    name: "mypalace",
                    params : {
                        userId
                    }
                });
            }
            else{
                router.push({
                    name: "login"
                });
            }
        }

        return {
            users,
            open_palace
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.card{
    margin-bottom: 10px;
    cursor: pointer;
}

.card:hover{
    box-shadow: 2px 2px 10px lightgray;
    transition: 500ms;
}

.username{
    height: 60%;
    font-weight: bold;
}

.followercount{
    height: 40%;
    font-size: 12px;
}
</style>