"use client";
import { useParentFolderIdContext } from "@/context/ParentFolderIdContext";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/config/firebase";
import { useSession } from "next-auth/react";
import FolderList from "@/components/FolderList";
import FileList from "@/components/FileList";

const FolderDetails = () => {
  const params = useSearchParams();
  const name = params.get("name");
  const id = params.get("id");
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const db = getFirestore(app);
  const { data: session } = useSession();
  const { setParentFolderId, createdFolder, createdFile, isFileDeleted } =
    useParentFolderIdContext();

  useEffect(() => {
    setParentFolderId(id);
    if (session) {
      getFolderList();
      getFileList();
    }
  }, [id, session, createdFolder, createdFile, isFileDeleted]);

  const getFolderList = async () => {
    setFolders([]);
    const q = query(
      collection(db, "Folders"),
      where("createBy", "==", session.user.email),
      where("parentFolderId", "==", id)
    );
    const list = await getDocs(q);
    list.forEach((doc) => {
      setFolders((folders) => [...folders, doc.data()]);
    });
  };

  const getFileList = async () => {
    setFiles([]);
    const q = query(
      collection(db, "files"),
      where("parentFolderId", "==", id),
      where("createdBy", "==", session.user.email)
    );

    const list = await getDocs(q);
    list.forEach((doc) => {
      setFiles((files) => [...files, doc.data()]);
    });
  };

  return (
    <div className="p-5 ">
      <h2 className="text-[20px] font-bold p-5 mt-5 bg-white rounded-[10px_10px_0px_0px]  ml-8 mr-8">
        {name}
      </h2>

      {folders.length > 0 ? (
        <FolderList folders={folders} />
      ) : (
        <h2 className="text-[16px] p-5 bg-white rounded-[0px_0px_10px_10px] ml-8 mr-8">
          No Folder Found
        </h2>
      )}

      <FileList files={files} />
    </div>
  );
};

export default FolderDetails;
