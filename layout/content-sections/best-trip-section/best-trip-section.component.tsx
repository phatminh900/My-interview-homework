import ContentSection from "@/components/content-section/content-section.component";
import BestTripsImgs from "./best-trip-imgs/best-trip-section-imgs.component";
const BestTripSection = () => {
  return (
    <ContentSection
      title="Best Value Trips"
      description="Best offers trips from us"
    >
      <BestTripsImgs />
    </ContentSection>
  );
};
export default BestTripSection;
