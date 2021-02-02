import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

export const SidebarData = [
    {
        title: "Home",
        icon:<HomeIcon/>,
        link: "/Home"
    },
    {
        title: "About Us",
        icon:<InfoIcon/>,
        link: "/Home"
    },
    {
        title: "Contact",
        icon:<ContactSupportIcon/>,
        link: "/Home"
    },
    {
        title: "Services",
        icon:<SettingsApplicationsIcon/>,
        link: "/Home"
    }
]
