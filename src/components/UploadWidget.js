import React, {useEffect, useRef} from 'react'

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log(cloudinaryRef.current)
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dgn3disfh',
      uploadPreset: 'jgfy3xoy'
    }, function(error, result) {
      console.log(result);
    });
  }, [])
  return (
    <div>
      <button onClick={() => widgetRef.current.open()}>Upload button</button>
    </div>
  )
}

export default UploadWidget
