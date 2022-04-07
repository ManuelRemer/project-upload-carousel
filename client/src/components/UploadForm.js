import { useState, useEffect } from "react";
import { RegInput } from "../components";

const UploadForm = () => {
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [imagesToUpload, setImagesToUpload] = useState([]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setImagesToUpload([...imagesToUpload, { color, image }]);
          setColor("");
          setImage("");
        }}
      >
        <RegInput
          label="color"
          type="color"
          value={color}
          handleInput={(e) => setColor(e)}
          required
        />
        <RegInput
          label="image"
          type="file"
          value={image}
          handleInput={(e) => {
            const selected = e;
            setImage(selected);
          }}
          accept="image/*"
          required
        />
        <button type="submit">Add image</button>
      </form>
    </div>
  );
};

export default UploadForm;
