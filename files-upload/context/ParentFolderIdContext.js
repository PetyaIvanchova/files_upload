"use client";

import { createContext, useContext, useState } from "react";

const ParentFolderIdContext = createContext();

export function ParentFolderIdProvider({ children }) {
  const [parentFolderId, setParentFolderId] = useState(null);
  const [createdFolder, setCreatedFolder] = useState(false);
  const [createdFile, setCreatedFile] = useState(false);
  const [isFileDeleted, setIsFileDeleted] = useState(false);

  return (
    <ParentFolderIdContext.Provider
      value={{
        parentFolderId,
        setParentFolderId,
        createdFolder,
        setCreatedFolder,
        createdFile,
        setCreatedFile,
        isFileDeleted,
        setIsFileDeleted,
      }}
    >
      {children}
    </ParentFolderIdContext.Provider>
  );
}

export function useParentFolderIdContext() {
  return useContext(ParentFolderIdContext);
}
