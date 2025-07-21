import { Box } from "@mui/material"
import { SideBar, Navbar } from "../components"


const drawerWidth = 240

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}  
    className="animate__animated animate__fadeIn animate__faster"
    
    >
       <Navbar drawerWidth={drawerWidth} />

       <SideBar drawerWidth={drawerWidth} />
        <Box 
        component='main' 
        sx={{flexGrow: 1, p:3}}
        >
            {/* ToolBar */}

            {children}

        </Box>

    </Box>
  )
}

export default JournalLayout
