import { Outlet } from "react-router"
import NavBar from "./NavBar"

const AppLayout = () => {

    return (<>
      
            <div style={{position:'relative'}}>
                <NavBar />
            </div>
            _______________________________________
                <Outlet />
  
            ************
        
    </>)
}

export default AppLayout