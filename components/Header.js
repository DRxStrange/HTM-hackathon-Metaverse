import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="text-blue-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-blue-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://wallpaperaccess.com/full/8054249.png"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>

        <div className="text-left lg:text-center col-span-4">
          <div className="h-48 w-48 relative lg:mx-auto border-purple-600 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to the Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          {/* Change username component */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
