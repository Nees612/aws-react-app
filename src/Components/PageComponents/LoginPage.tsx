import { withAuthenticator } from "@aws-amplify/ui-react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router-dom";


function LoginPage(){
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);
    return<>
        {authStatus == 'authenticated' ? <Navigate to="/userpage"/> : <Navigate to="/login"/>  }
    </>
}

export default withAuthenticator(LoginPage);