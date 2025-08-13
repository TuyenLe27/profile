"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-teal-400 text-center">
        Contact
      </h1>

      <div className="space-y-4 text-lg text-gray-300 mb-8">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:letuyen2k6@gmail.com"
            className="text-teal-400 hover:underline"
          >
            letuyen2k6@gmail.com
          </a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/le-tuyen-66a5ba37a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            linkedin.com/in/le-tuyen-66a5ba37a
          </a>
        </p>
        <p>
          🖥 GitHub:{" "}
          <a
            href="https://github.com/TuyenLe27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            github.com/TuyenLe27
          </a>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
      >
        <div>
          <label className="block text-gray-300 mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500 outline-none transition resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold text-white transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
