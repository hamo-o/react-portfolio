import Image from "next/image";
import styled from "@emotion/styled";

import Flex from "./Flex";

interface ImageProp {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: string;
  objectFit?: "cover" | "contain";
}

const NextImage = (image: ImageProp) => {
  return (
    <ImageContianer
      width={
        image.width
          ? typeof image.width === "number"
            ? `${image.width}px`
            : image.width
          : "100%"
      }
      height={
        image.height
          ? typeof image.height === "number"
            ? `${image.height}px`
            : image.height
          : "100%"
      }
      style={{ borderRadius: image.borderRadius ? image.borderRadius : 0 }}
    >
      <ImageContent
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        objectFit={image.objectFit ? image.objectFit : "cover"}
      />
    </ImageContianer>
  );
};

const ImageContianer = styled(Flex)`
  overflow: hidden;
  position: relative;
`;

const ImageContent = styled(Image)<{ objectFit: "cover" | "contain" }>`
  object-fit: ${({ objectFit }) => objectFit};
`;

export default NextImage;
