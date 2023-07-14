<script setup>
import { useCommentStore, usePostStore } from '../store';
import CommentCard from './CommentCard.vue';
import Pagination from './Pagination.vue';
import { watchEffect, ref } from "vue"

const usePost = usePostStore()
const useComments = useCommentStore()

const limit = 2
const pageNum = ref(1)

watchEffect(async () => {
    await useComments.getCommentsByPostID(usePost.postID)
})
</script>

<template>
    <div v-for="(c, i) in useComments.comments">
        <CommentCard v-if="pageNum*limit-limit < i+1 && i+1 <= pageNum*limit" :comment="c"/>
    </div>
    <Pagination :itemNum="useComments.comments.length" :limit="limit" @change="(val) => pageNum = val"/>
</template>

<style scoped>

</style>
