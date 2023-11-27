import ContentSection from "@/components/content-section/content-section.component";
import ChooseUsImgs from "./choose-us-imgs/choose-us-imgs.component";
const ChooseUsSection = () => {
  return (
    <ContentSection
      title="Why Choose Us"
      description="Here are reasons you should plan trip with us"
    >
      <ChooseUsImgs />
    </ContentSection>
  );
};
export default ChooseUsSection;
