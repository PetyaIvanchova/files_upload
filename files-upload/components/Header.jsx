"use client";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaGoogle, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  return (
    <header className="bg-pink-500 text-white p-4 flex flex-row">
      <h1 className="text-2xl font-bold flex-auto content-center">My Drive</h1>
      {!session ? (
        <div className="flex items-center">
          {providers &&
            Object.values(providers).map((provider, index) => (
              <button
                onClick={() => signIn(provider.id)}
                key={index}
                className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
              >
                <FaGoogle className="text-white mr-2" />
                <span>Login or Register</span>
              </button>
            ))}
        </div>
      ) : (
        <button
          onClick={() => {
            signOut();
          }}
          className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
          role="menuitem"
          tabIndex="-1"
          id="user-menu-item-2"
        >
          <FaSignOutAlt className="text-white mr-2" />
          Sign Out
        </button>
      )}
    </header>
  );
};

export default Header;
