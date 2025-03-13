import UserAvatar from "@/components/Avatar";
import React from "react";

const MiniAcc = ({ account }: { account: any }) => {
  return (
    <div className="bg-light-600 rounded-md size-48 p-3 flex flex-col gap-2 justify-center">
      <UserAvatar className="self-center mb-3" url={account.universityCard} />
      <p className="truncate min-w-0 self-center">{account.fullName}</p>

      <p className="truncate min-w-0 text-center">{account.email}</p>
    </div>
  );
};

export default MiniAcc;
