import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    navigate(newValue)
                }}
            >
                <BottomNavigationAction icon={<HomeIcon />} />
                <BottomNavigationAction value={"/search"} icon={<SearchIcon />} />
                <BottomNavigationAction icon={<PersonIcon />} />
            </BottomNavigation>
        </Paper>
    )
}

export default Navigation