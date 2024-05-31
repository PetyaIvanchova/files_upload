"use client";
import CreateFolderButton from "./CreateFolderButton";
import UploadFileButton from "./UploadFileButton";

const Buttons = () => {
  return (
    <main className="p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">My Files</h2>
          <div>
            <button
              className="bg-purple-400 text-white px-4 py-2 rounded mr-2"
              onClick={() => window.upload_file.showModal()}
            >
              Upload Files
            </button>
            <button
              className="bg-orange-400 text-white px-4 py-2 rounded"
              onClick={() => window.my_modal_3.showModal()}
            >
              Add Folder
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <CreateFolderButton />
      </dialog>
      <dialog id="upload_file" className="modal">
        <UploadFileButton
          closeUploadWindow={() => window.upload_file.close()}
        />
      </dialog>
    </main>
  );
};

export default Buttons;
