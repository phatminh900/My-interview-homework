import Image from "next/image";
import logoImgWhite from "@/public/images/logo@2x_white.png";
import logoImgBlack from "@/public/images/logo@2x.png";

const Logo = ({ isDefaultLogo }: { isDefaultLogo: boolean }) => {
  return (
    <div>
      {isDefaultLogo ? (
        <Image width={90} src={logoImgWhite} alt="Image logo" />
      ) : (
        <Image width={90} src={logoImgBlack} alt="Image logo" />
      )}
    </div>
  );
};
export default Logo;
