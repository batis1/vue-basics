import Vue from "vue";
import Vuex from "vuex";
import PostService from "@/services/PostService";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        categories: [
            "sustainability",
            "nature",
            "animal welfare",
            "housing",
            "education",
            "food",
            "community",
        ],
        user: {
            id: "abc123",
            name: "Adam",
        },
        posts: [],
        post: {},
    },
    getters: {
        catLength: (state) => {
            return state.categories.length;
        },
        getPostById: (state) => (id) => {
            return state.posts.find((post) => post.id === id);
        },
    },
    mutations: {
        INCREMENT_COUNT(state, value) {
            state.count += value;
        },
        ADD_POST(state, post) {
            state.posts.push(post);
        },
        SET_POSTS(state, posts) {
            state.posts = posts;
        },
        SET_POST(state, post) {
            state.post = post;
        },
        DELETE_POST(state, id) {
            index = state.posts.findIndex((post) => car.id == id);
            state.post.splice(index, 1);
        },
    },
    actions: {
        createPost({ commit }, post) {
            return PostService.postPost(post).then(() => {
                commit("ADD_POST", post);
            });
        },
        updateCount({ state, commit }, value) {
            if (state.user) {
                commit("INCREMENT_COUNT", value);
            }
        },
        fetchPosts({ commit }, { perPage, page }) {
            PostService.getPosts(perPage, page)
                .then((response) => {
                    console.log(
                        "Total posts are " + response.headers["x-total-count"]
                    );
                    commit("SET_POSTS", response.data);
                })
                .catch((error) => {
                    console.log("There was an error:", error.response);
                });
        },
        fetchPost({ commit, getters }, id) {
            var post = getters.getPostById(id);

            if (post) {
                commit("SET_POST", post);
            } else {
                PostService.getPost(id)
                    .then((response) => {
                        commit("SET_POST", response.data);
                    })
                    .catch((error) => {
                        console.log("There was an error:", error.response);
                    });
            }
        },
        // deletePost({ commit }, id) {
        //     if (id > 1) {
        //         commit("DELETE_POST", id);
        //     } else {
        //         PostService.deletePost(this.id)
        //             .then((response) => {
        //                 console.log(response.data);
        //                 commit("DELETE_POST", id);
        //                 this.$router.push({ name: "posts" });
        //             })
        //             .catch((error) => {
        //                 console.log("There was an error:", error.response);
        //             });
        //     }
        // },
    },
    modules: {},
});
