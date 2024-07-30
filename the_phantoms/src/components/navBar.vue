<template>
    <nav style="position:fixed; width: 100%; z-index: 9999;" class="navbar navbar-inverse navbar-fixed-top navbar-expand-lg">
        <div class="container">
        <div class="nav-logo"></div>
        <router-link class="navbar-brand" :to="{name: 'home'}">The_phantoms</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'fight'}">对战</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'userlist'}">用户列表</router-link>
            </li>
            </ul>
            <ul class="navbar-nav" v-if="!$store.state.user.is_login">
                <li class="nav-item">
                    <router-link :to="{name: 'register'}" class="nav-link">注册</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'login'}" class="nav-link">登录</router-link>
                </li>
            </ul>
            <ul class="navbar-nav" v-else>
                <li class="nav-item">
                    <router-link :to="{name: 'mypalace', params: {userId : $store.state.user.id} }" class="nav-link">{{ $store.state.user.username }}</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'home'}" class="nav-link" @click="logout" style="cursor:pointer">Logout</router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';
export default{
    name: "NavBar",
    setup () {
        const store = useStore();
        const router = useRouter();
        const logout = () => {
            store.commit('logout');
            router.push({
                name: "home"
            });
        };

        return {
            logout
        }
    }
}


</script>

<style scoped>
.navbar-brand{
    font-size:x-large;
    color: #9D9D9D;
}

.nav-logo {
    width: 40px;
    height: 40px;
    background: url('../assets/images/logo.png') no-repeat center center/cover;
}

.nav-link{
    font-size: medium;
    color: #9D9D9D;
}

.nav-link:hover{
    font-size: medium;
    color: white;
}
</style>