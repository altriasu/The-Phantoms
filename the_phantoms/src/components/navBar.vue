<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
        <router-link class="navbar-brand" :to="{name: 'home'}">Persona5</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'mypalace'}">My Palace</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'fight'}">Fight</router-link>
            </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name: 'login'}" class="nav-link">login</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'register'}" class="nav-link">register</router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default{
    name: "NavBar"
}
</script>

<style scoped></style>