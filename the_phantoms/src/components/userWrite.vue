<template>
    <div>
        <div class="form-floating">
            <textarea v-model="content" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea2">编辑内容</label>
        </div>
        <button @click="post_add" type="button" class="btn btn-success" style="margin: 10px;">发帖</button>
    </div>
</template>

<script>
import {ref} from 'vue';
import { useStore } from 'vuex';
import $ from 'jquery';
export default {
    name: "UserWrite",
    setup(props, context) {
        let content = ref('');
        const store = useStore();

        const post_add = () =>{
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/post/",
                type: "POST",
                data: {
                    content: content.value
                },
                headers: {
                'Authorization' : "Bearer " + store.state.user.access
                },
                success(resp){
                    if (resp.result === "success"){
                        if (content.value === '') return;
                        context.emit("post_add", content.value);
                        content.value = '';
                    }
                }
            })   
        }

        return {
            content,
            post_add
        }
    }
}
</script>

<style scoped>
div {
    margin-top: 10px;
}
</style>