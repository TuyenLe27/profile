"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Định nghĩa interface cho TypeScript
interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string; // Index signature để tương thích với Record<string, unknown>
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_1zndz05", // Service ID từ bạn
        "template_y2zatpp", // Template ID từ bạn
        formData,
        "QJzdE1CZp1gdM3deB" // Public Key từ bạn
      );
      setStatus("Đã gửi! Cảm ơn bạn đã liên hệ.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("Lỗi khi gửi, thử lại sau!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-6 text-teal-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Liên Hệ
      </motion.h1>

      <motion.div
        className="space-y-4 text-lg text-gray-300 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>
          Email:{" "}
          <a
            href="mailto:letuyen2k6@gmail.com"
            className="text-teal-400 hover:underline"
          >
            letuyen2k6@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
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
          GitHub:{" "}
          <a
            href="https://github.com/TuyenLe27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            github.com/TuyenLe27
          </a>
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div>
          <label className="block text-gray-300 mb-2">Họ Tên</label>
          <input
            type="text"
            name="name"
            placeholder="Nhập họ tên của bạn"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Nhập email của bạn"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">Tin Nhắn</label>
          <textarea
            name="message"
            placeholder="Viết tin nhắn của bạn..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500 outline-none transition resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold text-white transition flex items-center justify-center gap-2 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaPaperPlane /> {isSubmitting ? "Đang gửi..." : "Gửi Tin Nhắn"}
        </button>

        {status && (
          <motion.p
            className={`text-center ${
              status.includes("Lỗi") ? "text-red-400" : "text-teal-300"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}