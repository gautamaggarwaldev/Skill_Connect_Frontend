import { Navigate } from "react-router-dom";
import useUserStore from "../store/user";

const ProtectedRoute = (props) => {
    const { children } = props;
    const { user } = useUserStore();

    if(!user) {
        return <Navigate to="/signin" />;
    }

    return <>
        {children}
    </>
}

export default ProtectedRoute;