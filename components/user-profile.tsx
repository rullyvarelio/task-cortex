"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import defaultProfile from "@/public/circle-user.svg";

export default function UserProfile() {
  const session = useSession();

  const imageUrl = session?.data?.user?.image ?? defaultProfile;
  const name = session?.data?.user?.name;
  const email = session?.data?.user?.email;

  return (
    <div>
      <Image
        src={imageUrl}
        width={24}
        height={24}
        alt={`${name} profile picture`}
        className="rounded-full"
      />
      <p className="truncate">{email}</p>
    </div>
  );
}
