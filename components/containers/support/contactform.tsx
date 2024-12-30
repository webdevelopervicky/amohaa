"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style.module.css";
import one from "@/public/img/contact.png";
import Image from 'next/image';
import bgimage from "@/public/img/contactusbg.jpg"
import { url } from "inspector";


export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", number: "", subject: "" });
  const [status, setStatus] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    setShowModal(true);

    try {
      // Send data to the contact form API route
      const dbResponse = await axios.post("/api/contactform", formData);
      if (dbResponse.status === 201) {
        setStatus("Sending...");

        // Now, send the email
        const emailResponse = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!emailResponse.ok) {
          const errorData = await emailResponse.json();
          throw new Error(errorData.message || "Failed to send message.");
        }

        setStatus("Message send successfully!");
        setFormData({ name: "", email: "", message: "", number: "", subject: "" });
      }
    } catch (error: any) {
      setStatus(`Error: ${error.message || "An error occurred. Please try again."}`);
    }
  };

  // Automatically hide the status modal after 5 seconds
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 12000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <section className="contact-section fix p-5" style={{
      backgroundImage: `url(${bgimage.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}>
      <div className="text-center pb-5"><h1 style={{color:"white"}}>Contact us</h1></div>
      <div className="container">

        <div className="contact-wrapper">

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-left">
                <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">

                </h2>
                <div
                  className="contact-image"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299315!3d12.953945614011563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1735573783802!5m2!1sen!2sin"
                    width="600"
                    height="550"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>


              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-right">
                <h3 data-aos="fade-up"className="text-center" data-aos-duration="800" style={{color:"white"}}>Your vision, our expertise. Get in touch to make it happen.</h3>
                <form onSubmit={handleSubmit} className="contact-form-items">
                  <div className="row g-4">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                      <div className="form-clt">
                        <input
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                      <div className="form-clt">
                        <input
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                      <div className="form-clt">
                        <input
                          value={formData.number}
                          onChange={handleChange}
                          type="number"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                      <div className="form-clt">
                        <div className="category-oneadjust">
                          <select
                            name="subject"
                            className="category"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select Subject</option>
                            <option value="Domain">hosting </option>
                            <option value="Hosting">wesite </option>
                            <option value="VPS Hosting">SMS gateway</option>
                            <option value="VPS Hosting">Whatapp gateway</option>
                            <option value="VPS Hosting">Others</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                      <div className="form-clt">
                        <textarea
                          value={formData.message}
                          onChange={handleChange}
                          name="message"
                          id="message"
                          placeholder="Messages"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
                      <button type="submit" className="theme-btn">
                        Submit Now <i className="fa-solid fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Modal with timer line */}
      {showModal && (
        <div className={styles["status-modal"]}>
          <p>{status}</p>
          <div className={styles["timer-line"]}></div>
        </div>
      )}
    </section>
  );
}
