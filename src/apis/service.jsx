import AxiosInstances from ".";

const createService = async(data) => {
    return await AxiosInstances.post("/services", data);
};

const getAllServices = async() => {
    return await AxiosInstances.get("/services");
};

const editService = async(id,data) => {
    return await AxiosInstances.put("/services/" + id,data);
};

const getServiceById = async(id) => {
    return await AxiosInstances.get(`/services/${id}`);
};

export default { getAllServices, createService, editService, getServiceById };