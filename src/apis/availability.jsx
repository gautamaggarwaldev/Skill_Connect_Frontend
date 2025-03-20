import AxiosInstance from ".";

const getMentorAvailability = async (mentorId, duration) => {
    const res = await AxiosInstance.get(`availability/${mentorId}?duration=${duration}`);
    return res;
};

export default getMentorAvailability;