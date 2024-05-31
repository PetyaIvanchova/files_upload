import FileItem from "./FileItem";
const FileList = ({ files }) => {
  return (
    <div
      className="bg-white mt-5 p-5
    rounded-lg ml-8 mr-8"
    >
      <h2 className="text-[18px] font-bold">Files</h2>
      <div
        className="grid grid-cols-1
        md:grid-cols-2 
        text-[13px] 
        font-semibold
        border-b-[1px]
        pb-2 mt-3
        border-gray-300
         text-gray-400"
      >
        <h2>Name</h2>
        <div className="grid grid-cols-3">
          <h2>Modified</h2>
          <h2>Size</h2>
          <h2></h2>
        </div>
      </div>
      {files &&
        files.map((item, index) => (
          <div key={index}>
            <FileItem file={item} key={index} />
          </div>
        ))}
    </div>
  );
};

export default FileList;
