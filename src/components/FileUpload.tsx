
import React, { useMemo, useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    height: '120px',
    overflow: 'hidden',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPath[]>([]);
  const { 
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    maxFiles:1,
    accept: {'text/csv': ['.csv']},
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      // Call your backend API endpoint to upload files
    },
  });


  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div>
        <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag and drop a csv file here or click to browse.</p>
        <em>(Only *.csv files will be accepted)</em>
        <ul>
            {uploadedFiles.map((file) => (
            <li key={file.name}>{file.name}</li>
            ))}
        </ul>
        </div>
    </div>
  );
};
export default FileUpload;