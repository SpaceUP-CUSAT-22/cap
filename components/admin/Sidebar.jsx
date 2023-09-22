"use client";
import Link from "next/link";
import Image from "next/image"
import logo from "../../public/assets/images/logo.png"
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';


import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import {signOut} from 'next-auth/react'
   
const Sidebar = () => {
  const [show, setShow] = React.useState(false)
  React.useEffect(() => {
    if(window.innerWidth > 640) setShow(true)
  },[])
    return (
      <>
        <div
            // onClick={() => setShow(show => !show)}
             className="sm:hidden px-5 py-5 absolute"><MenuIcon className='text-3xl' /></div>
        {show && <Card className="absolute z-2 md:relative md:z-0 bg-black !rounded-[0px] col-span-1 h-[100%] w-full  p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
          <Link href="/" className='bg-blue-800 mb-10 hover:bg-blue-500 text-white px-3 py-2 rounded-[5px] text-center'>
              Back
            </Link>
            <div className="flex justify-center">
              <Image src={logo} width="250" height="250" />
            </div>
            <Typography variant="h5" color="white">
              Admin Panel
            </Typography>
          </div>
          <List>
            <ListItem className="text-white text-xl my-5 hover:bg-slate-500 px-3 py-3">
              <Link
                  // onClick={() => setShow(show => !show)}
                  href="/admin/add-task">
                  Add task
              </Link>
            </ListItem>
            <ListItem className="text-white text-xl my-5 hover:bg-slate-500 px-3 py-3">
              <Link
                  // onClick={() => setShow(show => !show)}
                  href="/admin/add-admin">
                Add new admin
              </Link>
            </ListItem>
            <ListItem className="text-white text-xl my-5 hover:bg-slate-500 px-3 py-3">
              <Link
                  // onClick={() => setShow(show => !show)}
                  href="/admin/assign-scores">
                Assign scores
              </Link>
            </ListItem>
            <ListItem onClick={() => {
              signOut()
              window.location.replace('/')
            }} className="text-white text-xl my-5 hover:bg-red-500 px-3 py-3">
              Log Out
            </ListItem>
          </List>
        </Card>}
      </>
    );
  }

  export default Sidebar