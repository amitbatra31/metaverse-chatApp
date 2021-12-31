import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import { useEffect, useState } from "react";
function Header() {
  const { user } = useMoralis();
  const [username, setUsername] = useState();

  useEffect(() => {
    if (!user) return null;
    setUsername(user.get("username"));
  }, [user]);
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-400 border-b-2 border-pink-700 ">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative mx-auto w-24 h-24 hidden lg:inline-grid">
          <Image
            src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="text-left lg:text-center col-span-4">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to the Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">{username}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
