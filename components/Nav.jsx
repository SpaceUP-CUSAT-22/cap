"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";
import {AiOutlineClose } from "react-icons/ai";


const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "/leaderboard",
    title: "Leaderboard",
  },
  {
    id: "/contact",
    title: "Contact",
  },
];

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
  <nav className={`sm:px-8 px-4 flex items-center z-20 glass-effect md:mt-0 mt-5`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex flex-row">
          <Image
            src='/assets/images/logo1.svg'
            alt='logo'
            width={100}
            height={100}
            className='object-contain'
          />
        </Link>


        <ul className="list-none hidden  sm:flex flex-row items-center gap-10">
          {navLinks.map((nav,i) => (
            <li
              key={i}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          {session?.user ? (
            <div className='flex gap-3 md:gap-5'>
              <Link href={session?.user.type == "admin" ? "/admin" : '/cap'} className='black_btn !border-white'>
                Dashboard
              </Link>

              <button type='button' onClick={() => {
                setToggleDropdown(false);
                signOut();
              }}
                    className='black_btn !border-white'
                    >
                Sign Out
              </button>

              <Link href={`/profile`}>
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile'
                />
              </Link>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider, i) => (
                  <button
                    type='button'
                    key={i}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className='black_btn !border-white'
                  >
                    Sign in
                  </button>

                ))}
            </>
          )}
        </ul>


        {/* Mobile Navigation */}

        <div className='sm:hidden  flex relative'>
          {session?.user ? (
            <div className='flex '>

              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full ml-5'
                alt='profile'
                onClick={() => setToggleDropdown(!toggleDropdown)}
              />

              {toggleDropdown && (
                <div className='dropdown bg-primary black-gradient'>
                  <Link
                      href={`/`}
                      className='dropdown_link !text-white'
                      onClick={() => setToggleDropdown(false)}
                  >
                    Home
                  </Link>
                  <Link
                      href={session?.user.type == "admin" ? "/admin" : '/cap'}
                      className='dropdown_link !text-white'
                      onClick={() => setToggleDropdown(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href={`/profile`}
                    className='dropdown_link !text-white'
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>

                  <Link
                      href={`/leaderboard`}
                      className='dropdown_link !text-white'
                      onClick={() => setToggleDropdown(false)}
                  >
                    Leaderboard
                  </Link>
                  <button
                    type='button'
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className='mt-3 black_btn !text-white !border-white'
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider, i) => (
                  <div className="sm:hidden flex flex-1 gap-3 justify-end items-center">

                    {toggle ?
                      <AiOutlineClose
                        style={{ color: "#fff" }}
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)} />
                      :
                      <GiHamburgerMenu
                        style={{ color: "#fff" }}
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)} />}

                    <div
                      className={`${!toggle ? "hidden" : "flex"
                        } p-6 black-gradient  absolute top-5 bg-primary right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                      <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                        {navLinks.map((nav, i) => (
                          <li
                            key={i}
                            className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                              }`}
                            onClick={() => {
                              setToggle(!toggle);
                              setActive(nav.title);
                            }}
                          >
                            <Link href={`${nav.id}`}>{nav.title}</Link>
                          </li>
                        ))}
                        <button
                            type='button'
                            key={i}
                            onClick={() => {
                              signIn(provider.id);
                            }}
                            className='bg-tranparent w-100 rounded-[50px] border-2 border-white px-3 py-2 text-white'
                        >
                          Sign in
                        </button>
                      </ul>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>

      </div>
    </nav>
  );
};




export default Nav;
