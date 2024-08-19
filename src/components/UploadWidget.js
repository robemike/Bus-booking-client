// import React, {useEffect, useRef} from 'react'

// const UploadWidget = () => {
//   const cloudinaryRef = useRef();
//   const widgetRef = useRef();

//   useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//     console.log(cloudinaryRef.current)
//     widgetRef.current = cloudinaryRef.current.createUploadWidget({
//       cloudName: 'dgn3disfh',
//       uploadPreset: 'jgfy3xoy'
//     }, function(error, result) {
//       console.log(result);
//     });
//   }, [])
//   return (
//     <div>
//       <button onClick={() => widgetRef.current.open()}>Upload button</button>
//     </div>
//   )
// }

// export default UploadWidget





import React, { useEffect, useRef } from "react";

const UploadWidget = ({ imageUrl, setImageUrl }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dgn3disfh", // Your Cloudinary cloud name
        uploadPreset: "jgfy3xoy", // Your upload preset
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImageUrl(result.info.secure_url); // Set the image URL in parent component state
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