// components/Sidebar.tsx
import React from "react";
import cn from "classnames";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
// 👇 props to get and set the collapsed state from parent component

import Image from "next/image";
import Link from "next/link";
import { defaultNavItems } from "./defaultNavItems";

const Sidebar = ({ collapsed, setCollapsed }) => {
  // 👇 use the correct icon depending on the state.
  const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <div
      className={cn({
        "bg-black text-zinc-50 z-20 h-full": true,
      })}
    >
      <div
        className={cn({
          "flex flex-col justify-between": true,
          "h-screen":true
        })}
      >
        {/* logo and collapse button */}
        <div
          className={cn({
            "flex items-center border-b border-b-black": true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          {!collapsed && <span className="text-lg -tracking-widest">T-gram</span>}
          <button
            className={cn({
              "grid place-content-center": true, // position
              "hover:bg-black ": true, // colors
              "w-10 h-10 rounded-full": true, // shape
            })}
            // 👇 set the collapsed state on click
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-grow">
            <ul className="my-3 flex-col gap-2 items-stretch">
                {defaultNavItems.map((item,index)=>{
                 return  (
                    <li key={index} className={
                        cn({
                            "bg-inherit hover:bg-slate-800 flex my-3":true,
                            "transition-colors duration-300":true,
                            "rounded-md p-2 mx-3 gap-4":!collapsed,
                            "rounded-full p-2 mx-3 w-10 h-10":collapsed
                        })
                    }>
                        <Link href={item.href} className="flex gap-2">
                            {item.icon} <span>{!collapsed && item.label}</span>
                        </Link>
                    </li>
                 )
                })}

            </ul>

        </nav>
        <div className={cn({
            "grid place-content-stretch":true
        })}>

            <div className={cn({
                "flex gap-4 p-2 items-center h-11 overflow-hidden":true,
                "mb-2":true
            })}>
                <Image
                src={"https://via.placeholder.com/150"}
                height={40}
                width={40}
                alt="profile image"
                className="rounded-full"
                />

            {!collapsed && (
                <div className="flex flex-col">
                    <span className="tracking-wider">ARK</span>

                    <Link href="/" className="text-sm">view profile</Link>
                </div>
            )

            }
            </div>

            

        </div>
      </div>
    </div>
  );
};
export default Sidebar;

