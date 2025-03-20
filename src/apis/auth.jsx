import AxiosInstance from ".";

const signup = (data) => {
    return AxiosInstance.post("/auth/signup", data);
};

const signin = (data) => {  
    return AxiosInstance.post("/auth/signin", data);
};

export { signup, signin };