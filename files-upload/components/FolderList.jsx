"use client";
import { useState } from "react";
import FolderItem from "./FolderItem";
import { useRouter } from "next/navigation";

const FolderList = ({ folders }) => {
  const [activeFolder, setActiveFolder] = useState();
  const router = useRouter();

  const onOpen = (index, item) => {
    setActiveFolder(index);
    router.push(`/folder/${item.id}?name=${item.name}&id=${item.id}`);
  };
  return (
    <>
      <div className="p-5 mt-5 bg-white rounded-lg ml-8 mr-8">
        <h2 className="text-[17px] font-bold ">Folders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3 gap-4">
          {folders.map((item, index) => (
            <div key={index} onClick={() => onOpen(index, item)}>
              <FolderItem folder={item} key={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FolderList;
