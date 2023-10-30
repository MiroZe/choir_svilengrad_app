

const TestDownload = () => {
    const handleDownloadClick = async () => {
      try {
        const response = await fetch('http://localhost:3000/download', {
          method: 'GET',
        });
  
        if (response.ok) {
          const { downloadUrl } = await response.json();
          // Open the download URL in a new browser tab
          window.open(downloadUrl, '_blank');
        } else {
          console.error('Error downloading file:', response.statusText);
        }
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    };
  
    return (
        <div>
          <button onClick={handleDownloadClick}>Download File</button>
        </div>
      );

  };
  
  export default TestDownload;
  