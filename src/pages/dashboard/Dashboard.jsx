import DashboardNavbar from "../../components/DashboardNavbar";
import SideBar from "../../components/SideBar"
const Dashboard = ({ children }) => {

    return(
        <div>
            <DashboardNavbar />
            <div className="flex">
                <SideBar />
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )  
}

export default Dashboard