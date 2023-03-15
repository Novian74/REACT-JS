import axios from 'axios';

const url = "http://127.0.0.1:8000/api";
const token = "8P6WO7igBScBCfyivEk9Zo3iGi3UxyItaQETWdEh";

export const link = axios.create({
    baseURL: url,
    headers: {
        api_token: token,
    },
});