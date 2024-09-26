import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const ImageGallery = () => {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      <a href="img/img1.jpg">
        <img alt="img1" src="img/thumb1.jpg" />
      </a>
      <a href="img/img2.jpg">
        <img alt="img2" src="img/thumb2.jpg" />
      </a>
    </LightGallery>
  );
};

export default ImageGallery;
