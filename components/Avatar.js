import Image from "next/image";
import { useMoralis } from "react-moralis";
import { useState, useEffect } from "react";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  const [username2, setUsername] = useState();

  useEffect(() => {
    if (!user) return null;
    setUsername(user.get("username"));
  }, [user]);

  return (
    <div>
      <Image
        src={`https://avatars.dicebear.com/api/pixel-art/${
          username || username2
        }.svg`}
        onClick={() => logoutOnPress && logout()}
        layout="fill"
        className="rounded-full bg-black cursor-pointer hover:opacity-75"
      />
    </div>
  );
}

export default Avatar;
