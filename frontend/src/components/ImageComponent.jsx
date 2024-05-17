import { useEffect, useState } from "react";

const ImageComponent = ({ src, alt, onLoad }) => {
    
    const [orientationClass, setOrientationClass] = useState('');

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
          const isHorizontal = img.width > img.height;
          const orientation = isHorizontal ? 'horizontal' : 'vertical';
          setOrientationClass(orientation);
          if (onLoad) {
            onLoad(isHorizontal);
          }
        };
        img.src = src;
      }, [src, onLoad]); // Dependency array with src and onLoad to re-run if these props change
    
      return <img src={src} alt={alt} className={`post-img-data ${orientationClass}`} />;
    };
    
    export default ImageComponent;
