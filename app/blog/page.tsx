import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import NewsGrid from "@/components/containers/news/NewsGrid";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import image from "@/public/img/news/news.png"

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Blog" image={image} />
      <NewsGrid />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
