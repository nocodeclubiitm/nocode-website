import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const ProfileCard = ({ name, role, image, description }: ProfileCardProps) => {
  return (
    <div className="text-sm leading-6 text-white bg-[#20354b] rounded-sm">
      <figure className="relative flex flex-col-reverse rounded-lg p-6 ">
        <blockquote className="mt-6 ">
          <p>{description}</p>
        </blockquote>
        <figcaption className="flex items-center space-x-4">
          <Image
            src="/vercel.svg"
            alt=""
            width={56}
            height={56}
            className="flex-none w-14 h-14 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="flex-auto">
            <div className="text-white ">{name}</div>
            <div className="mt-0.5">{role}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default ProfileCard;
