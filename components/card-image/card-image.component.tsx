import Image from "next/image";
import Card from "../card/card.component";
import styles from "./card-image.module.scss";
const CardImage = ({
  src,
  className,
  height,
  width,
  children,
  sizes,
}: {
  children: React.ReactNode;
  src: string;
  width?: number;
  sizes?: string;
  height?: number;
  className?: string;
}) => {
  return (
    <Card className={`${className} ${styles.card}`}>
      <Image
        alt="Card Img"
        src={src}
        height={height}
        width={width}
        fill
        priority
        unoptimized
        sizes={sizes}
        style={{ backgroundPosition: "center center" }}
      />
      {children}
    </Card>
  );
};
export default CardImage;
