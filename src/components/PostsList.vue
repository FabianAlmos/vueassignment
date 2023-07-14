<script setup>
import Pagination from './Pagination.vue';
import { usePostStore } from "../store/index"
import { watchEffect, ref } from 'vue';
import PostCard from './PostCard.vue';

const usePosts = usePostStore()

const limit = 10
const pageNum = ref(1)

watchEffect(async () => {
    await usePosts.getPosts()
})
</script>

<template>
    <div v-for="(p, i) in usePosts.posts">
        <PostCard v-if="pageNum*limit-limit < i+1 && i+1 <= pageNum*limit" :post="p"/>
    </div>
    <Pagination :itemNum="usePosts.posts.length" :limit="10" @change="(val) => pageNum = val"/>
</template>

<style scoped>

</style>
