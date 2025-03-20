import AxiosInstances from ".";

const uploadImage = async(formData) => {
    return await AxiosInstances.post("/users/uploadphoto", formData);
};

const getUser = async() => {
    return await AxiosInstances.get("/users");
};

const updateUser = async(data) => {
    return await AxiosInstances.put("/users/updateprofile", data);
};

const userAPI = { uploadImage, getUser, updateUser };

export default userAPI;