"use client";
import folderImg from "@/assets/images/folder.png";
import Image from "next/image";
import { useState } from "react";
import { app } from "../config/firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useParentFolderIdContext } from "@/context/ParentFolderIdContext";

const CreateFolderButton = () => {
  const [folderName, setFolderName] = useState();
  const docId = Date.now().toString();
  const { data: session } = useSession();
  const db = getFirestore(app);
  const { parentFolderId, createdFolder, setCreatedFolder } =
    useParentFolderIdContext();

  const onCreate = async () => {
    await setDoc(doc(db, "Folders", docId), {
      name: folderName,
      id: docId,
      createBy: session.user.email,
      parentFolderId: parentFolderId,
    });
    setFolderName("");
    setCreatedFolder(!createdFolder);
  };
  return (
    <div>
      <form method="dialog" className="modal-box p-9 items-center">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div
          className="w-full items-center 
          flex flex-col justify-center gap-3"
        >
          <Image
            src={folderImg}
            alt="folder"
            priority={true}
            width={50}
            height={50}
          />
          <input
            type="text"
            placeholder="Folder Name"
            className="p-2 border-[1px] outline-none rounded-md"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <button
            className="bg-orange-400
            text-white rounded-md p-2 px-3 w-full"
            onClick={() => onCreate()}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFolderButton;
