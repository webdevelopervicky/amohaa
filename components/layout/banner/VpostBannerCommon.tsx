"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import postdetails from "@/components/containers/news/blog.json";

const BannerCommon = ({ title }: any) => {
  const params = useParams(); 
  const slug = params.slug; 
  const post = postdetails.find((item) => item.ID === Number(slug));
  if (!post) {
    return (
      <>
    <h1>post not found</h1>
      </>
    );
  }
  const imageSrc = post.bannerimg || "/img/default-image.jpg";
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{
        backgroundImage: "url(/img/breadcrumb-1.jpg)",
      }}
    >
      <div className="container">
        <div className="page-heading">
          <div className="page-header-left">
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              {post.heading}
            </h1>
            <ul
              className="breadcrumb-items "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <i className="fa-regular fa-chevrons-right"></i>
              </li>
              <li>{title}</li>
            </ul>
          </div>
          <div
            className="breadcrumb-image "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <Image src={imageSrc} width={451} height={0} alt="img"style={{height:"300px",width:"451px"}} priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCommon;
