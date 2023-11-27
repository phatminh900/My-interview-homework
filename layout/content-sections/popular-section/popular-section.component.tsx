import ContentSection from "@/components/content-section/content-section.component";
import PopularImgs from "./popular-imgs/popular-imgs.component";
const PopularSection = () => {
  return (
    <ContentSection
      title="Popular Destinations"
      description="World's best tourist destinations"
    >
      <PopularImgs />
    </ContentSection>
  );
};
export default PopularSection;
