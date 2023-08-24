import React, { useState} from 'react';

const ImageUploader = () => {

    const [ selectedImage, setSelectedImage ] = useState(null);

    const handleImageChange = (event) => {
        const image = event.target.files(0);
        setSelectedImage(image);
    }

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            <div>
                {selectedImage && (
                    <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"

                        className={empInfoImg}
                    />
                )}
            </div>
        </div>
    );

}
export default ImageUploader;