<script setup>
import CommentsList from '../components/CommentsList.vue';
import Pagination from '../components/Pagination.vue';
import PostCard from '../components/PostCard.vue';
import { usePostStore } from '../store';
import { watchEffect } from "vue"

const usePost = usePostStore()

watchEffect(async () => {
    await usePost.getPost()
})
</script>

<template>
  <PostCard :post="usePost.post"/>
  <CommentsList/>
</template>

<style scoped>

</style>