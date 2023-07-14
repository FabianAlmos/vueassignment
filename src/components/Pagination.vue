<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    itemNum: number
    limit: number
}>()

const emit = defineEmits<{
    (event: "change", val: number): void
}>()

const pageNum = ref(1)

function changePage(n: number) {
    pageNum.value = n
    emit("change", pageNum.value)
}
</script>

<template>
    <a v-for="i in Math.ceil(itemNum / limit)" :active="i === pageNum" @click="changePage(i)">{{ i }}</a>
</template>

<style scoped>
    a {
        font-weight: bold;
        padding-inline: 2.5px;
    }

    a[active=true] {
        color: red;
    }

    a[active=false]:hover {
        cursor: pointer;
        color: hotpink;
    }
</style>
