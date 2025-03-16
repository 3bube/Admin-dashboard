import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ChevronDown } from "lucide-react";

function UserAvatar() {
  return (
    <div className="relative flex items-center">
      <div className="flex items-center gap-2 bg-[#FAF9F6] rounded-full py-2 pl-3 pr-10 cursor-pointer">
        <Avatar className="h-12 w-12 border-2 border-white">
          <AvatarImage src="https://github.com/shadcn.png" alt="Raji Muzzamill" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>

        <div className="flex flex-col ml-1">
          <span className="font-medium text-base">Raji Muzzamill</span>
          <span className="text-sm text-gray-500">Manager</span>
        </div>
      </div>
      <ChevronDown className="absolute right-3 h-5 w-5 text-gray-500" />
    </div>
  );
}

export default UserAvatar;
