<template>
    <div>
        <div class="form-floating">
            <textarea v-model="content" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
            <label for="floatingTextarea2">编辑内容</label>
        </div>
        <button @click="but_click" type="button" class="btn btn-success" style="margin: 10px;">发帖</button>
    </div>
</template>

<script>
import {ref} from 'vue';
export default {
    name: "UserWrite",
    setup(props, context) {
        let content = ref('');

        const but_click = () =>{
            if (content.value === '') return;
            context.emit("but_click", content.value);
            content.value = '';
        }

        return {
            content,
            but_click
        }
    }
}
</script>

<style scoped>
div {
    margin-top: 10px;
}
</style>