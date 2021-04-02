import React, { useState, useEffect } from 'react';


import DesktopNav from './desktopNav'
import MobileNav from './mobileNav'

import useWindowSize from '../../hooks/useWindowSize'

export default function Nav({ user, children }) {
    const size = useWindowSize();

    return (
        <>
            {
                size.width > 640 && <DesktopNav user={user} />
            }
            {
                children
            }
            {
                size.width <= 640 && <MobileNav user={user} />
            }
        </>
    )
}




