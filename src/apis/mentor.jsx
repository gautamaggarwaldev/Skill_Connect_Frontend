import AxiosInstances from ".";

// Define the functions
const getAllMentors = () => {
    return AxiosInstances.get("/mentors");
}

const getMentorByUsername = (userName) => {
    return AxiosInstances.get("/mentors/" + userName);
}

const getMentorById = (mentorId) => {
    return AxiosInstances.get("/mentos/" + mentorId);
}

const mentorAPI = {
    getAllMentors,
    getMentorByUsername,
    getMentorById,
}

export default mentorAPI;