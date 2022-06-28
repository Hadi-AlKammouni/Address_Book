import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            navigate("login")
            localStorage.clear()
        };
        logout();
    }, []);

    return(<></>)
}

export default Logout;