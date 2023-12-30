import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '210baa12a95c4c9bb006c1ce052f0255'
    },
})