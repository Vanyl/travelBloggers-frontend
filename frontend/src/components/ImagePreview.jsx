import { useState, useEffect } from "react";

const ImagePreview = () => {
    const [imageFile, setImageFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState('');

    const handleChange = (e) => {
        const files = e.target.files;
        if (!files || !files[0]) return;
        setImageFile(files[0]);
    };

    useEffect(() => {
        if (!imageFile) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewSrc(reader.result);
        };
        reader.readAsDataURL(imageFile);
        return () => {
            reader.abort();
        };
    }, [imageFile]);

    return (
        <div style={{ width: '300px' }}>
            <div style={{ aspectRatio: '4 / 3', backgroundColor: 'silver', overflow: 'hidden' }}>
                {previewSrc && (
                    <img
                        src={previewSrc}
                        alt='Preview'
                        width='100%'
                        height='100%'
                        style={{ objectFit: 'cover' }}
                    />
                )}
            </div>
            <input type='file' accept='image/*' aria-label='Upload image' onChange={handleChange} />
        </div>
    );
};

export default ImagePreview;
