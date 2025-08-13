"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

// Định nghĩa interface cho TypeScript
interface FormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [showModal, setShowModal] = useState<"success" | "error" | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        "service_1zndz05",
        "template_y2zatpp",
        data,
        "QJzdE1CZp1gdM3deB"
      );
      setShowModal("success");
      reset();
    } catch {
      setShowModal("error");
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
        className="flex justify-center gap-6 text-lg text-gray-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a
          href="mailto:letuyen2k6@gmail.com"
          className="flex items-center gap-2 text-teal-400 hover:underline"
        >
          <FaEnvelope /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/le-tuyen-66a5ba37a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-teal-400 hover:underline"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/TuyenLe27"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-teal-400 hover:underline"
        >
          <FaGithub /> GitHub
        </a>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div>
          <label className="block text-gray-300 mb-2">Họ Tên</label>
          <input
            {...register("name", { required: "Vui lòng nhập họ tên" })}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500 outline-none transition"
          />
          {errors.name && <p className="text-red-400 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            {...register("email", {
              required: "Vui lòng nhập email",
              pattern: { value: /^\S+@\S+$/i, message: "Email không hợp lệ" },
            })}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500 outline-none transition"
          />
          {errors.email && <p className="text-red-400 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Tin Nhắn</label>
          <textarea
            {...register("message", { required: "Vui lòng nhập tin nhắn" })}
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-teal-400 focus:ring focus:ring-teal-500 outline-none transition resize-none"
          />
          {errors.message && <p className="text-red-400 mt-1">{errors.message.message}</p>}
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
      </motion.form>

      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-800 p-8 rounded-xl max-w-md">
            <h2 className="text-2xl font-bold text-teal-400">
              {showModal === "success" ? "Gửi Thành Công" : "Gửi Thất Bại"}
            </h2>
            <p className="text-gray-300 mt-2">
              {showModal === "success"
                ? "Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể."
                : "Lỗi khi gửi, thử lại sau!"}
            </p>
            <button
              onClick={() => setShowModal(null)}
              className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-full"
            >
              Đóng
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}