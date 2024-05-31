"use client";
import FolderList from "@/components/FolderList";
import FileList from "@/components/FileList";
import { useEffect, useState, React } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/config/firebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Buttons from "@/components/Buttons";
import { useParentFolderIdContext } from "@/context/ParentFolderIdContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [files, setFiles] = useState([]);
  const db = getFirestore(app);
  const [folders, setFolders] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
  const { setParentFolderId, createdFolder, createdFile, isFileDeleted } =
    useParentFolderIdContext();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      getFolderList();
      getFileList();
    }
    setParentFolderId(0);
  }, [session, createdFolder, createdFile, isFileDeleted]);

  const getFolderList = async () => {
    setFolders([]);
    const q = query(
      collection(db, "Folders"),
      where("parentFolderId", "==", 0),
      where("createBy", "==", session.user.email)
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
      where("parentFolderId", "==", 0),
      where("createdBy", "==", session.user.email)
    );

    const list = await getDocs(q);
    list.forEach((doc) => {
      setFiles((files) => [...files, doc.data()]);
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Buttons />
      <FolderList folders={folders} />
      <FileList files={files} />
      <Footer />
    </div>
  );
}
