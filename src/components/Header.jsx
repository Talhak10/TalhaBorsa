import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useContext, useRef, useState } from "react";
import { Context } from "../context/AppContext";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";

const Header = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const { search, setSearch } = useContext(Context);

  useClickAway(ref, () => setOpen(false));

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur flex items-center justify-center w-full h-screen z-10">
          <div ref={ref}>
            <SignIn />
          </div>
        </div>
      )}
      <div className="grid gap-y-4 md:flex md:items-center md:justify-between mb-4 w-full p-4 rounded-lg border border-white/50 bg-white/10">
        <div className="text-2xl font-semibold">
          <Link to="/" className="flex items-center justify-center text-center">TalhaBorsa</Link>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <Link to="/altin" className="flex items-center justify-center text-center h-9 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-800 transition-all">ALTIN</Link>
          <Link to="/kripto" className="flex items-center justify-center text-center h-9 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-800 transition-all">KRİPTO</Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full relative flex items-center justify-center">
            <input
              type="text"
              placeholder="Aramak istediğiniz birim..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-8 rounded-md px-2 h-9 bg-white/10 border border-white/50 outline-none focus:border-white/85"
            />
            {search.length > 0 && (
              <svg
                onClick={() => setSearch("")}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-5 h-5 top-1/2 -translate-y-1/2 right-2 cursor-pointer select-none"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
              </svg>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <SignedIn>
            <UserButton afterSignOutUrl="/" showName={true} />
          </SignedIn>
          <SignedOut>
            <button type="button" className="h-9 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-800 transition-all" onClick={() => setOpen((prev) => !prev)}>
              Giriş yap
            </button>
          </SignedOut>
        </div>
      </div>    
    </>
  );
};

export default Header;
