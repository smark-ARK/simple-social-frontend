// import LoginForm from "@/components/LoginForm";
// import Image from "next/image";
import Feed from "../components/Feed";

import CreatePost from "../components/createPost";

import Demo from "../components/Demo";

export default function Home() {
  return (
    <div className="grid grid-cols-4 my-5 overscroll-none">
      <div className="bg-slate-100 col-span-3 mx-5 rounded-md shadow-md">
        <Feed />
      </div>
      <div className="col-span-1 mr-5 flex-col">
        <div className="bg-slate-100 max-h-30 rounded-md shadow-md">
          <CreatePost />
        </div>
      </div>
    </div>
  );
}
