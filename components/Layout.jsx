'use client';
import React, { useState } from 'react'

import classNames from 'classnames'
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from './Sidebar';


const Layout = ({children}) => {
    // const [collapse,setCollapse]=useState(false)
  return (
    <div className={
        classNames(
            {
                "grid min-h-screen":true,
        "grid-cols-sidebar-collapsed": true,
        // 👇 transition animation classes
            }
        )
    }>

        {/* sidebar */}
     <Sidebar/>
       {children}
      {/* content */}
    </div>
  )
}

export default Layout