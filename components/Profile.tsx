'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, } from "./ui/dropdown-menu"
import { CgProfile } from 'react-icons/cg'
import { AiOutlineHistory } from 'react-icons/ai';
import { FiSettings, FiLogOut } from 'react-icons/fi'
import {MdOutlineDarkMode} from 'react-icons/md'
import { ModeToggle } from "./ModeToggle";
import { FaUserFriends } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Profile = () => {
  return (
    <>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className='cursor-pointer'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-4 mt-1 z-100 bg-white'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <hr />

            <DropdownMenuItem><CgProfile size={25} className="mr-2" /> Profile</DropdownMenuItem>
            <DropdownMenuItem><AiOutlineHistory size={25} className="mr-2" />Watch History</DropdownMenuItem>
            <DropdownMenuItem>
              <ModeToggle/>
              </DropdownMenuItem>
            <DropdownMenuItem><FiSettings size={25} className="mr-2" /> Settings</DropdownMenuItem>
            <DropdownMenuItem><FaUserFriends size={25} className="mr-2" /> Invite Friends</DropdownMenuItem>
            <hr />
            <DropdownMenuItem><FiLogOut size={25} className="mr-2" /> Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>

    </>
  )
}

export default Profile