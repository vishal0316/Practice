import { useState, useRef } from "react";
import { MdAddAPhoto, MdDelete } from "react-icons/md";
import axios from "axios";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleAddImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = {
        id: images.length + 1,
        url: URL.createObjectURL(file),
        name: file.name,
      };
      setImages([...images, newImage]); // Add new image to the array
      await uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://backend-api.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const removeImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="w-40 h-40 bg-white rounded-lg shadow-md overflow-hidden relative group"
          >
            <img
              src={image.url}
              alt={image.name}
              className="w-full h-full hover:opacity-60 object-cover"
            />
            <button
              onClick={() => removeImage(image.id)}
              className="absolute top-0 right-0 p-2 bg-red-500  text-white rounded-full hidden group-hover:block"
            >
              <MdDelete />
            </button>
          </div>
        ))}
        <button
          className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-6xl hover:bg-gray-300 transition-colors"
          onClick={handleAddImage}
        >
          <MdAddAPhoto />
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

export default ImageGallery;
