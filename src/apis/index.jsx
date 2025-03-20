import axios from "axios";
import toast from "react-hot-toast";

import { USER_STORE_PERSIST } from "../const";
import { BASE_URL } from "../const/env.const.jsx";
import { getToken, removeToken } from "../helper";

let AxiosInstances; //Declare a variable to hold the axios instance

(() => {
    // Create an axios instance with a base URL
    AxiosInstances = axios.create({
        baseURL: BASE_URL,
    });

    // Add a request interceptor to include the token in the headers
    AxiosInstances.interceptors.request.use((config) => {
        const token = getToken(); //Get the token from storage
        token && (config.headers.Authorization = `Bearer ${token}`);
        return config;
    });

    // Add a response interceptor to handle errors
    AxiosInstances.interceptors.response.use(
        (response) => response, // If the response is successful, return it
        (error) => {
            if(error.response?.data.success === "false") {
                const message = error.response.data.message;
                message ? toast.error(message) : toast.error("something went wrong");
                if(error.response.status === 401) {
                    removeToken();
                    sessionStorage.removeItem(USER_STORE_PERSIST);
                    window.location.href = "/signup"; // Redirect to the signin page
                }
            } else {
                toast.error("something went wrong");
            }
            throw error;
        }
    );
})();

export default AxiosInstances;