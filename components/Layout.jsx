'use client';
import React, { useState } from 'react'

import classNames from 'classnames'
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from './Sidebar';


const Layout = ({children}) => {
    const [collapse,setCollapse]=useState(false)
  return (
    <div>
    <div className={
        classNames(
            {
                "grid min-h-screen":true,
                "grid-cols-sidebar": !collapse,
        "grid-cols-sidebar-collapsed": collapse,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true
            }
        )
    }>

        {/* sidebar */}
     <Sidebar collapsed={collapse} setCollapsed={()=>setCollapse((prev)=>!prev)} />
    <div className="bg bg-slate-200">
      <div className='mx-14 my-7 rounded-lg bg-slate-50 h-screen p-5'>
       {children}
      </div>
       </div>
      {/* content */}
    </div>
    </div>
  )
}

export default Layout