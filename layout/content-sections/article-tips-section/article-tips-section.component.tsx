import ContentSection from "@/components/content-section/content-section.component";
import ArticleTripsImgBoxs from "./article-tips-imgs/article-tips-imgs.component";

const ArticleTipsSection = () => {
  return (
    <ContentSection
      title="Articles & Tips"
      description="Explore some of the best tips from around the world"
    >
      <ArticleTripsImgBoxs />
    </ContentSection>
  );
};
export default ArticleTipsSection;
