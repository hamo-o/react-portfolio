import Image from "next/image";
import styled from "@emotion/styled";

interface ImageProp {
  src: string;
  alt: string;
  borderRadius?: string;
}

const NextImage = (image: ImageProp) => {
  return (
    <ImageContianer
      style={{ borderRadius: image.borderRadius ? image.borderRadius : 0 }}
    >
      <ImageContent src={image.src} alt={image.alt} fill sizes="100vw" />
    </ImageContianer>
  );
};

const ImageContianer = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  position: relative;
`;

const ImageContent = styled(Image)`
  object-fit: cover;
`;

export default NextImage;
