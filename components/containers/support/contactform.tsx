"use client";
import { useState } from "react";
import axios from "axios";  

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", number: "", subject: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Send data to the contact form API route
      const dbResponse = await axios.post("/api/contactform", formData);
      if (dbResponse.status === 201) {
        setStatus("Message saved to database successfully!");

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

        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", number: "", subject: "" });
      }
    } catch (error: any) {
      setStatus(`Error: ${error.message || "An error occurred. Please try again."}`);
    }
  };

  return (
    <section className="contact-section fix section-padding">
      <div className="container">
        <div className="contact-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-left">
                <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
                  Request a <br /> Consultation
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-right">
                <h3 data-aos="fade-up" data-aos-duration="800">Get in Touch</h3>
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
                            <option value="Domain">Domain</option>
                            <option value="Hosting">Hosting</option>
                            <option value="VPS Hosting">VPS Hosting</option>
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
                {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
