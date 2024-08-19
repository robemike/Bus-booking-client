import React, { useEffect, useRef } from "react";

const UploadWidget = ({ imageUrl, setImageUrl }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dgn3disfh", 
        uploadPreset: "jgfy3xoy",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImageUrl(result.info.secure_url); 
        }
      }
    );
  }, [setImageUrl]);

  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>Upload Image</button>
      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default UploadWidget;