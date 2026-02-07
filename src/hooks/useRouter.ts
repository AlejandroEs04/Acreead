import { useContext } from "react";
import { RouterContext } from "../context/RouteContext";

export const useRouter = () => {
    const context = useContext(RouterContext);
    if (!context) {
        throw new Error('useRouter must be used within an RouterProvider');
    }
    return context;
};