import Image, { StaticImageData } from "next/image";
import styled from "@emotion/styled";

import Flex from "./Flex";
import { colors } from "@/styles/theme";

interface ImageProp {
  src: StaticImageData | string;
  alt: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: "top left";
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
        placeholder="blur"
        fill
        sizes="100vw"
        objectFit={image.objectFit ? image.objectFit : "cover"}
        objectPosition={image.objectPosition}
      />
    </ImageContianer>
  );
};

const ImageContianer = styled(Flex)`
  overflow: hidden;
  position: relative;
`;

const ImageContent = styled(Image)<{
  objectFit: "cover" | "contain";
  objectPosition?: "top left";
}>`
  object-fit: ${({ objectFit }) => objectFit};
  object-position: ${({ objectPosition }) => objectPosition};
`;

const MockImage = styled.div`
  width: 100%;
  height: 100%;

  background: ${colors.primary_black_60};
`;

export default NextImage;
