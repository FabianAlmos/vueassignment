<script setup>
import { usePostStore } from '../store';
import router from "../router/index"

const props = defineProps(['post'])

const usePosts = usePostStore()

function nav() {
    usePosts.postID = props.post.id
    router.push("/post")
}
</script>

<template>
    <RouterLink class="post-container" to="" @click="nav()">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </RouterLink>
</template>

<style scoped>
    .post-container {
        display: block;
        cursor: pointer;
        text-decoration: none !important;
        color: black;
        border: 5px solid yellow;
        padding: 15px;
        margin-block: 15px;
    }
    
    .post-container:hover {
        border: 5px solid green;
    }
</style>
