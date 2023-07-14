import { defineStore } from "pinia"

export const usePostStore = defineStore("post", {
    state: () => ({
        postID: -1,
        post: {},
        posts: []
    }),
    actions: {
        async getPosts() {
            this.$state.posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(resp => resp.json())
        },

        async getPost() {
            const temp = await fetch("https://jsonplaceholder.typicode.com/posts?id=" + this.$state.postID).then(resp => resp.json())
            this.$state.post = temp[0]
        },

        setPostID(id) {
            this.$state.postID = id
        }
    }
})

export const useCommentStore = defineStore("comment", {
    state: () => ({
        comments: []
    }),
    actions: {
        async getCommentsByPostID(id) {
            this.$state.comments = await fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id).then(resp => resp.json())
        }
    }
})