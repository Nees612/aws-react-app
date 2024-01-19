import {Outlet, Navigate} from "react-router-dom"
import { useAuthenticator } from "@aws-amplify/ui-react";

function PrivateRouteComponent (){    
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);

    return <>
        {authStatus == 'authenticated' ? <Outlet/> : <Navigate to="/login"/> }
    </>
}


export default PrivateRouteComponent;