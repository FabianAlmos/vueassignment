<script setup>
import { defineProps } from "vue"

defineProps(["comment"])
</script>

<template>
    <div>
        <h3>{{ comment.name }}</h3>
        <h4>{{ comment.name }}</h4>
        <p>{{ comment.body }}</p>
    </div>
</template>

<style scoped>
    div {
        display: block;
        cursor: pointer;
        text-decoration: none !important;
        color: black;
        border: 5px solid blue;
        padding: 15px;
        margin-block: 15px;
    }
    
    div:hover {
        border: 5px solid blueviolet;
    }
</style>
