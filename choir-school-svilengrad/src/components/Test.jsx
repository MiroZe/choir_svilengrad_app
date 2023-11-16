import { useState } from 'react';


const Test = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
   

    fetch('http://localhost:3000/uploads', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('File uploaded. Public URL:', data);
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <>
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} name='file' />
      <button onClick={handleUpload}>Upload File</button>
    </div>
    </>
  );
};

export default Test;
