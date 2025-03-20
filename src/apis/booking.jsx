import AxiosInstance from '.';

const bookService = async (data) => {
    const res = await AxiosInstance.post('/bookings/initiate-booking', data);
    return res;
};

const getMentorBookings = async () => {
    const res = await AxiosInstance.get("/bookings/mentor/");
    return res;
};

const getStudentBookings = async () => {
    const res = await AxiosInstance.get("/bookings/");
    return res;
};

const booking = {
    bookService,
    getMentorBookings,
    getStudentBookings,
};

export default booking; 