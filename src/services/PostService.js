import axios from "axios";

const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getPosts(perPage, page) {
        return apiClient.get("/posts?_limit=" + perPage + "&_page=" + page);
    },
    getPost(id) {
        return apiClient.get("/posts/" + id);
    },
    deletePost(id) {
        return apiClient.delete("/posts/" + id);
    },
    postPost(post) {
        return apiClient.post("/posts", post);
    },
};
