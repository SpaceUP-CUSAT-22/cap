"use client";
import Link from "next/link";
import Image from "next/image"
import logo from "../../public/assets/images/logo.png"

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
   
const Sidebar = () => {
    return (
      <Card className="bg-black col-span-1 h-screen w-full  p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <div className="flex justify-center">
            <Image src={logo} width="250" height="250" />
          </div>
          <Typography variant="h5" color="white">
            Dashboard
          </Typography>
        </div>
        <List>
          <ListItem className="text-white text-xl my-5 hover:bg-slate-500 px-3 py-3">
            <Link href="/cap/view-tasks">
                View tasks
            </Link>
          </ListItem>
          <ListItem className="text-white text-xl my-5 hover:bg-slate-500 px-3 py-3">
            <Link href="/cap/view-tasks">
                Help
            </Link>
          </ListItem>
          <ListItem className="text-white text-xl my-5 hover:bg-red-500 px-3 py-3">
            Log Out
          </ListItem>
        </List>
      </Card>
    );
  }

  export default Sidebar