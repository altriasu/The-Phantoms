<template>
  <div class="container">
    <div class="card" >
      <div class="card-body">
        <div v-for="post in posts.posts" :key="post.id">
          <div class="card" style="margin-bottom : 10px;">
            <div class="card-body">
              {{ post.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "UserPost",
    props:{
      posts: {
        type: Object,
        required: true
      }
    }
}
</script>

<style>

</style>