"use client";

import { User } from "@prisma/client";
import Link from "next/link";
import UserBox from "./UserBox";

interface UserListProps {
  items: User[];
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside
      className="
    fixed
    inset-y-0
    pb-20
    lg:pb-0
    lg:left-20
    xl:w-80
    lg:w-60
    lg:block
    overflow-y-auto
    border-r
    border-gray-200
    block
    w-full
    left-0
    "
    >
      <div className="px-8">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-800 py-4">People</div>
        </div>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </div>
    </aside>
  );
};

export default UserList;
