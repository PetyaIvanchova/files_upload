import Image from "next/image";
import folderImg from "@/assets/images/folder.png";

const FolderItem = ({ folder }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[180px] border-[1px] rounded-lg p-5 bg-white hover:scale-105 hover:shadow-md cursor-pointer">
      <Image
        src={folderImg}
        alt="folder"
        width={100}
        priority={true}
        height={100}
      />
      <h2 className="line-clamp-2 text-[14px] pb-8">{folder.name}</h2>
    </div>
  );
};

export default FolderItem;
