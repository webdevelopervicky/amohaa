"use client"
import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/news/post-1.jpg";
import two from "@/public/img/news/post-2.jpg";
import three from "@/public/img/news/post-3.jpg";
import four from "@/public/img/news/pp3.jpg";
import five from "@/public/img/news/pp4.jpg";
import six from "@/public/img/news/pp5.jpg";
import postdetails from "@/components/containers/news/blog.json";
import { useState } from "react";

const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postdetails.slice(indexOfFirstPost, indexOfLastPost);


  const totalPages = Math.ceil(postdetails.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <section className="news-standard fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="news-standard-wrapper">
              {currentPosts.map((post, index) => (
                <div className="news-standard-items" key={index}>
                  <div className="news-thumb">
                    <Image
                      src={post.futureimage || "defaultimg"}
                      width={840}
                      height={400}
                      style={{height:"450px"}}
                      alt="img"
                      priority
                    />
                  </div>
                  <div className="news-content">
                    <ul className="date-list">
                      <li>
                        <b>Written by:</b> Marry Biden
                      </li>
                      <li className="color-2">14/03/2024</li>
                    </ul>
                    <h3>
                    <Link href={`/post/${post.ID}`}  key={post.ID}>{post.heading}</Link>
                    </h3>
                    <p>{post.description}</p>
                    <div className="news-button">
                      <Link href={`/post/${post.ID}`}  key={post.ID} className="link-btn mt-4">
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </Link>
                      <div className="social-profile">
                        <ul>
                          <li>
                            <Link href="/">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/">
                              <i className="fa-brands fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                        <span className="plus-btn">
                          Share <i className="fa-light fa-share-nodes"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="page-nav-wrap pt-5 text-center"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <ul className="pagination">
                  <li>
                    <button
                      className="page-numbers icon"
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i + 1}>
                      <button
                        className={`page-numbers ${currentPage === i + 1 ? "active" : ""
                          }`}
                        onClick={() => paginate(i + 1)}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      className="page-numbers icon"
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </li>
                </ul>
              </div>


            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="main-sidebar">
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Search</h3>
                </div>
                <div className="search-widget">
                  <form action="#">
                    <input type="text" placeholder="Search here" />
                    <button type="submit">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Categories</h3>
                </div>
                <div className="news-widget-categories">
                  <ul>
                    {Array.from(new Set(postdetails.map((postcat) => postcat.category))).map(
                      (uniqueCategory, index) => {
                        const categoryCount = postdetails.filter(
                          (postcat) => postcat.category === uniqueCategory
                        ).length;

                        return (
                          <li key={index}>
                            <Link href={`/Categories/${uniqueCategory}`}>{uniqueCategory}</Link>
                            <span>({categoryCount})</span>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Recent Post</h3>
                </div>
                <div className="recent-post-area">
                  {postdetails.slice(-3).map((repost, index) => (
                    <div className="recent-items" key={index}>
                      <div className="recent-thumb">
                        <Image
                          src={repost.futureimage || "defaultimg"}
                          width={100}
                          height={200}
                          alt="img"
                          priority
                        />
                      </div>
                      <div className="recent-content">
                        <ul>
                          <li>
                            <i className="fa-solid fa-calendar-days"></i>
                            {repost.date}
                          </li>
                        </ul>
                        <h6>
                          <Link href={`/post/${repost.ID}`} key={repost.ID}>
                            {repost.heading.length > 35
                              ? `${repost.heading.substring(0, 35)}...`
                              : repost.heading}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3>Tags</h3>
                </div>
                <div className="news-widget-categories">
                  <div className="tagcloud">

                    {Array.from(new Set(postdetails.map((postcat) => postcat.category))).map(
                      (uniqueCategory, index) => {
                        const categoryCount = postdetails.filter(
                          (postcat) => postcat.category === uniqueCategory
                        ).length;

                        return (
                          <Link key={index} href={`/Categories/${uniqueCategory}`}>{uniqueCategory}</Link>
                        );
                      }
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
