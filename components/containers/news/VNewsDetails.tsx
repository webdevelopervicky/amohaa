"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import three from "@/public/img/news/comment.png";
import seven from "@/public/img/news/comment-2.png";
import postdetails from "@/components/containers/news/blog.json";
import { useState } from "react";
import styles from "./post.module.css";
import 'font-awesome/css/font-awesome.min.css';


//================================


const NewsDetails = () => {
  const params = useParams();
  const slug = params.slug;
  const post = postdetails.find((item) => item.ID === Number(slug));

  const [activeSections, setActiveSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionKey: string) => {
    setActiveSections((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey],
    }));
  };

  if (post) {
    return (
      <section className="news-details fix section-padding">
        <div className="container">
          <div className="news-details-area">
            <div className="row g-5">
              <div className="col-12 col-lg-8">
                <div className="blog-post-details">
                  <div className="single-blog-post">
                    <div
                      className="post-featured-thumb bg-cover rounded"
                      style={{
                        backgroundImage: `url(${post.futureimage})`,
                      }}
                    ></div>
                    <div className="post-content">
                      <ul className="post-list d-flex align-items-center">
                        <li>
                          <i className="fa-regular fa-user"></i>
                          {post.admin}
                        </li>
                        <li>
                          <i className="fa-solid fa-calendar-days"></i>
                          {post.date || "18 Dec, 2024"}
                        </li>
                        <li>
                          <i className="fa-solid fa-tag"></i>
                          {post.category || "Technology"}
                        </li>
                      </ul>
                      <h3>{post.detailheading}</h3>
                      <p className="mb-3">{post.firstpara?.para1}</p>
                      <p className="mb-3">{post.firstpara?.para2}</p>
                      <p>{post.firstpara?.para3}</p>

                      <div className="row g-4 mt-2">
                        <div className="col-lg-6">
                          <div className="details-image">
                            <Image
                              src={post.image1 || "/default-image.jpg"} // Replace with your fallback image path
                              width={451}
                              height={300}
                              alt="img"
                              priority
                              style={{height:"300px"}}
                            />

                          </div>
                        </div>
                        <div className="col-lg-6 ps-3">
                          <h3>{post.para_head2}</h3>
                          <p className="mt-4 ">{post.secondpara?.para1}</p>
                        </div>
                      </div>

                      <p className="mt-4 mb-3">{post.secondpara?.para2}</p>

                      <div className="row g-4">
                        <div className="text-center">
                          <h3>{post.para_head3}</h3>
                        </div>
                        <div className="col-lg-6">
                          <p
                            className="text-justify mt-3"
                            style={{ textAlign: "justify" }}
                          >
                            {post.thirdpara?.para1}
                          </p>
                          <p
                            className="text-justify mt-3"
                            style={{ textAlign: "justify" }}
                          >
                            {post.thirdpara?.para2}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <div className="details-image">
                            <Image
                              src={post.image2 || "/default-image.jpg"}
                              width={451}
                              height={300}
                              alt="img"
                              style={{height:"300px"}}
                              priority
                            />
                          </div>
                        </div>
                      </div>
                      .
                      <div className="row">
                        <div className="">
                          <h3 className="text-center wid-title">{post.para_head4}</h3>
                          <p className="pt-2">{post.fourthpara?.para1}</p>
                          <p className="pt-2">{post.fourthpara?.para2}</p>
                        </div>
                      </div>


                      {/*========================*/}

                      {/* More content sections below */}

                      {
                        post.fiftpara &&
                        <div className="row mt-4">
                          <div className="">
                            <h3
                              onClick={() => toggleSection('fiftpara')}
                              className={`${styles['section-header']} ${activeSections['fiftpara'] ? styles.active : styles.inactive}`}
                            >
                              {post.para_head5}
                              <i
                                className={`fa ${activeSections['fiftpara'] ? 'fa-chevron-up' : 'fa-chevron-down'} mt-2`} // Icon for dropdown
                                style={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }}
                              ></i>
                            </h3>

                            {activeSections['fiftpara'] && (
                              <>
                                <div className={`${styles['section-content']}`}>
                                  <p className="">{post.fiftpara?.para1}</p>
                                  <p className="pt-2">{post.fiftpara?.para2}</p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      }

                      {post.sixedpara &&


                        <div className="row">
                          <div className="">
                            <h3
                              onClick={() => toggleSection('sixedpara')}
                              className={`${styles['section-header']} ${activeSections['sixedpara'] ? styles.active : styles.inactive}`}
                            >
                              {post.para_head6}
                              <i
                                className={`fa ${activeSections['sixedpara'] ? 'fa-chevron-up' : 'fa-chevron-down'} mt-2`} // Icon for dropdown
                                style={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }}
                              ></i>
                            </h3>

                            {activeSections['sixedpara'] && (
                              <>
                                <div className={`${styles['section-content']}`}>
                                  <p className="pt-2">{post.sixedpara?.para1}</p>
                                  <p className="pt-2">{post.sixedpara?.para2}</p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      }
                      {post.sevenpara &&
                        <div className="row">
                          <div className="">
                            <h3
                              onClick={() => toggleSection('sevenpara')}
                              className={`${styles['section-header']} ${activeSections['sevenpara'] ? styles.active : styles.inactive}`}
                            >
                              {post.para_head7}

                              <i
                                className={`fa ${activeSections['sevenpara'] ? 'fa-chevron-up' : 'fa-chevron-down'} mt-2`} // Icon for dropdown
                                style={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }}
                              ></i>


                            </h3>

                            {activeSections['sevenpara'] && (
                              <>
                                <div className={`${styles['section-content']}`}>
                                  <p className="pt-2">{post.sevenpara?.para1}</p>
                                  <p className="pt-2">{post.sevenpara?.para2}</p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      }
                      {post.eigthpara &&

                        <div className="row">
                          <div className="">
                            <h3
                              onClick={() => toggleSection('eigthpara')}
                              className={`${styles['section-header']} ${activeSections['eigthpara'] ? styles.active : styles.inactive}`}

                            >
                              {post.para_head8}
                              <i
                                className={`fa ${activeSections['eigthpara'] ? 'fa-chevron-up' : 'fa-chevron-down'} mt-2`} // Icon for dropdown
                                style={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }}
                              ></i>
                            </h3>

                            {activeSections['eigthpara'] && (
                              <>
                                <div className={`${styles['section-content']}`}>
                                  <p className="pt-2">{post.eigthpara?.para1}</p>
                                  <p className="pt-2">{post.eigthpara?.para2}</p>
                                  <p className="pt-2">{post.eigthpara?.para3}</p>
                                  <p className="pt-2">{post.eigthpara?.para4}</p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      }
                      {/*=================================*/}

                    </div>
                  </div>
                  <div className="row tag-share-wrap mt-4 mb-5">
                    <div className="col-lg-8 col-12">
                      <div className="tagcloud">
                        <span>Tags:</span>
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
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <div className="social-share">
                        <span className="me-3">Share:</span>
                        <Link href="/">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="/">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="/">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link href="/">
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="comments-area">
                    <div className="comments-heading">
                      <h3>02 Comments</h3>
                    </div>
                    <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
                      <div className="image">
                        <Image src={three} alt="image" />
                      </div>
                      <div className="content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                          <div className="con">
                            <h5>
                              <Link href="news-details">Albert Flores</Link>
                            </h5>
                            <span>March 20, 2024 at 2:37 pm</span>
                          </div>
                          <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p className="mt-30 mb-4">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is simply
                          dummy
                        </p>
                        <Link href="news-details" className="reply">
                          Reply
                        </Link>
                      </div>
                    </div>
                    <div className="blog-single-comment d-flex gap-4 pt-5 pb-5">
                      <div className="image">
                        <Image src={seven} alt="image" />
                      </div>
                      <div className="content">
                        <div className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                          <div className="con">
                            <h5>
                              <Link href="news-details">Alex Flores</Link>
                            </h5>
                            <span>March 20, 2024 at 2:37 pm</span>
                          </div>
                          <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <p className="mt-30 mb-4">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is simply
                          dummy
                        </p>
                        <Link href="news-details" className="reply">
                          Reply
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="comment-form-wrap pt-5">
                    <h3>Leave a comment</h3>
                    <form action="#" id="contact-form" method="POST">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="form-clt">
                            <span>Your Name*</span>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-clt">
                            <span>Your Email*</span>
                            <input
                              type="text"
                              name="email"
                              id="email2"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-clt">
                            <span>Message*</span>
                            <textarea
                              name="message"
                              id="message"
                              placeholder="Write Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <button type="submit" className="theme-btn ">
                            Post Comment
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </button>
                        </div>
                      </div>
                    </form>
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
                      <h3>Recent Posts</h3>
                    </div>
                    <div className="recent-post-area">
                      {postdetails.slice(-3).map((repost, index) => (
                        <div className="recent-items" key={index}>
                          <div className="recent-thumb">
                            <Image
                              src={repost.futureimage || "/default-image.jpg" }
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
        </div>
      </section>
    );
  }

  return null;
};

export default NewsDetails;
