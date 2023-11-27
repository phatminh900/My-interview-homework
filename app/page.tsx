import {
  Hero,
  PopularSection,
  BestTripSection,
  ChooseUsSection,
  ImageDemonstration,
  ArticleTipsSection,
  Main,
  Footer,
  StickyUtilities,
} from "@/layout";

const Home = () => {
  return (
    <>
      <Hero />
      <Main>
        <PopularSection />
        <BestTripSection />
        <ChooseUsSection />
        <ImageDemonstration />
        <ArticleTipsSection />
        <StickyUtilities />
      </Main>
      <Footer />
    </>
  );
};
export default Home;
