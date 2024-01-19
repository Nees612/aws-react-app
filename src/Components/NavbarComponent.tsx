import { NavLink } from "react-router-dom"
import { signOut } from "aws-amplify/auth"
import { Button } from "@aws-amplify/ui-react";
import { useAuthenticator } from '@aws-amplify/ui-react';

async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

function NavbarComponent () {
    const {authStatus} = useAuthenticator((context) => [context.authStatus]);

    return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky sticky-top">
      <div className="container-fluid">        
        <NavLink className="navbar-brand" to={'/'}>Brand name</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">                        
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
              {authStatus == 'authenticated' ? <UserNavbarComponent/> : <GuestNavbarComponent/>}                                   
          </div>
        </div>
      </div>
    </nav>
    </>
}

function UserNavbarComponent () {
    
    return <>                    
        <NavLink className="nav-link" to="/userpage">My Page</NavLink>
        <NavLink className="nav-link" to="/lessons">Lessons</NavLink>         
        <Button onClick={handleSignOut}>Sign Out</Button>            
        
    </>
}

function GuestNavbarComponent () {
    return <>      
      <NavLink className="nav-link" to="/userpage">Login</NavLink>       
    </>
}

export default NavbarComponent;