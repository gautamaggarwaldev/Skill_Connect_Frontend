/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import booking from "../../apis/booking";
import { Button, Spin, Table } from "antd";
import Layout from "../../components/Layout";
import moment from "moment";

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("upcoming");

    const fetchBookings = async () => {
        setLoading(true);
        const res = await booking.getMentorBookings();
        setBookings(res?.data?.bookings);
        setLoading(false);
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    const handlePayNow = async (bookingId) => {
        try {
        setLoading(true);

        const response = await booking.initiatePayment(bookingId);

        if (response?.data?.success) {
            if (response.data.paymentUrl) {
            window.location.href = response.data.paymentUrl;
            } else if (response.data.paymentDetails) {
            message.success("Payment successful!");
            fetchBookings();
            }
        } else {
            message.error(
            response?.data?.message ||
                "Payment initiation failed. Please try again."
            );
        }
        } catch (error) {
        console.error("Payment error:", error);
        message.error(
            "An error occurred during payment. Please try again later."
        );
        } finally {
        setLoading(false);
        }
    };

    const filteredBookings = bookings.filter((booking) => {
        if (activeTab === "upcoming") {
        return moment(booking.dateAndTime).isAfter(moment()); // Future bookings
        } else {
        return moment(booking.dateAndTime).isBefore(moment()); // Past bookings
        }
    });

    const columns = [
        {
        title: "Date",
        dataIndex: "dateAndTime",
        key: "dateAndTime",
        render: (text) => moment(text).format("DD MM YYYY, hh:mm A"),
        },
        {
        title: "Status",
        dataIndex: "status",
        key: "status",
        },
        {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (price) => `₹${price}`,
        },
        {
        title: "Action",
        key: "action",
        render: (text, record) =>
            record.status === "pending" ? (
            <Button type="primary" onClick={() => handlePayNow(record._id)}>
                Pay Now
            </Button>
            ) : null,
        },
    ];

  return (
    <Layout>
        <div className="container p-4 mx-auto">
            <h2 className="text-2xl font-bold">Your Bookings</h2>
            <div className="flex my-4 space-x-4">
            <Button
                type={activeTab === "upcoming" ? "primary" : "default"}
                onClick={() => setActiveTab("upcoming")}
            >
                Upcoming Bookings
            </Button>
            <Button
                type={activeTab === "past" ? "primary" : "default"}
                onClick={() => setActiveTab("past")}
            >
                Past Bookings
            </Button>
            </div>

            {loading ? (
            <Spin size="large" />
            ) : (
            <Table
                columns={columns}
                dataSource={filteredBookings}
                pagination={{ pageSize: 5 }}
                rowKey={(record) => record._id}
            />
            )}
        </div>
    </Layout>
  );
};

export default Booking;
