// components/Sidebar.tsx
import React from "react";
import cn from "classnames";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

// 👇 props to get and set the collapsed state from parent component
import {useSession} from 'next-auth/react'
import Image from "next/image";
import Link from "next/link";
import { defaultNavItems } from "./defaultNavItems";

const Sidebar = () => {

  const {data, status}= useSession()
  // 👇 use the correct icon depending on the state.
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
            "py-4 justify-center": true,
          })}
        >
        </div>

        <nav className="">
            <ul className="flex-col justify-start">
                {defaultNavItems.map((item,index)=>{
                 return  (
                    <li key={index} className={
                        cn({
                            "bg-inherit hover:bg-slate-800 my-5":true,
                            "transition-colors duration-300":true,
                            "rounded-full p-2 mx-3 w-10 h-10":true
                        })
                    }>
                        <Link href={item.href} className="flex gap-2">
                            {item.icon}
                        </Link>
                    </li>
                 )
                })}

            </ul>

        </nav>
        <div className={cn({
            "grid place-content-stretch mb-5 ml-2":true
        })}>
                {(status=="authenticated")?(<Image
                src={"https://via.placeholder.com/150"}
                height={40}
                width={40}
                alt="profile image"
                className="rounded-full"
                />):<Link href='/api/auth/signin'><ArrowLeftOnRectangleIcon height={40} width={40}/></Link>}
            

        </div>
      </div>
    </div>
  );
};
export default Sidebar;

