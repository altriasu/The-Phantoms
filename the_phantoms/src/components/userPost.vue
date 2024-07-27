<template>
  <div class="container">
    <div class="card" >
      <div class="card-body">
        <div v-for="post in posts.posts" :key="post.id">
          <div class="card" style="margin-bottom : 10px;">
            <div class="card-body">
              {{ post.content }}
              <button v-if="is_me" type="button" class="btn btn-danger btn-sm" @click="post_delete(post.id)">删除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    name: "UserPost",
    props:{
      posts: {
        type: Object,
        required: true
      },
      user: {
        type: Object,
        required: true
      }
    },
    setup(props, context) {
      const store = useStore();
      const post_delete = (post_id) => {
        $.ajax({
          url: "https://app165.acapp.acwing.com.cn/myspace/post/",
          type: "DELETE",
          data: {
            post_id
          },
          headers: {
            'Authorization': 'Bearer ' + store.state.user.access
          },
          success(resp) {
           if (resp.result === 'success'){
              context.emit("post_delete", post_id);
           }
          }
        })
      }

      const is_me = computed(() => store.state.user.id === props.user.id);

      return {
        post_delete,
        is_me
      }
    }
}
</script>

<style scoped>
button{
  float: right;
}
</style>