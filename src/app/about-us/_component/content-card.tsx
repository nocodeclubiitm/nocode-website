import { cn } from "@/lib/utils";
import React from "react";
interface ContentCardProps {
  title: string;
  subTitle: string;
  description: string;
  index: number;
}
const ContentCard = ({
  title,
  subTitle,
  description,
  index,
}: ContentCardProps) => {
  return (
    <div
      className={cn(
        "flex-col md:flex justify-center items-center gap-8",
        index % 2 == 0 ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="p-4 text-center md:text-left">
        <h2 className="text-3xl">{title}</h2>
        <h3 className="text-4xl text-[#FCA300] ">{subTitle}</h3>
        <p className=" text-xl mt-4">{description}</p>
      </div>
      <div className="">
        <div className=" hidden md:block w-[400px] h-[400px] rounded-full bg-transparent">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#444CF7"
              d="M56.2,-43.7C71.1,-26.1,80.3,-2.8,75.7,17.2C71,37.3,52.6,54.2,30.8,65.3C8.9,76.3,-16.4,81.5,-33.5,72.3C-50.6,63,-59.4,39.3,-61.3,17.8C-63.2,-3.8,-58.2,-23.1,-46.8,-39.9C-35.4,-56.6,-17.7,-70.9,1.5,-72.1C20.6,-73.2,41.3,-61.3,56.2,-43.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
