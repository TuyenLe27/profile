"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

// Định nghĩa interface cho TypeScript
interface Project {
  title: string;
  desc: string;
  link: string;
}

interface Skill {
  name: string;
  icon: string;
  category: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export default function Home() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      desc: "Trang cá nhân hiện đại với Next.js, Tailwind và Framer Motion, tối ưu hiệu suất và SEO.",
      link: "/projects/portfolio",
    },
    {
      title: "E-commerce App",
      desc: "Ứng dụng bán hàng trực tuyến với giỏ hàng, thanh toán Stripe và giao diện responsive.",
      link: "/projects/ecommerce",
    },
    {
      title: "Chat Application",
      desc: "Ứng dụng chat thời gian thực với Socket.io, Node.js và MongoDB.",
      link: "/projects/chat-app",
    },
  ];

  const skills: Skill[] = [
    // Front-end
    { name: "React", icon: "⚛️", category: "Front-end" },
    { name: "Next.js", icon: "⚡", category: "Front-end" },
    { name: "TypeScript", icon: "📘", category: "Front-end" },
    { name: "Tailwind CSS", icon: "🎨", category: "Front-end" },
    { name: "Framer Motion", icon: "🌀", category: "Front-end" },
    { name: "Vue.js", icon: "🌿", category: "Front-end" },
    { name: "Svelte", icon: "🔥", category: "Front-end" },
    { name: "Redux", icon: "🔄", category: "Front-end" },

    // Back-end
    { name: "Node.js", icon: "🟢", category: "Back-end" },
    { name: "Express.js", icon: "🚀", category: "Back-end" },
    { name: "NestJS", icon: "🪺", category: "Back-end" },
    { name: "Python (FastAPI)", icon: "🐍", category: "Back-end" },
    { name: "Go", icon: "🐹", category: "Back-end" },
    { name: "Django", icon: "🛠️", category: "Back-end" },

    // Database
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MySQL", icon: "🗄️", category: "Database" },
    { name: "Redis", icon: "🔴", category: "Database" },
    { name: "Firebase", icon: "🔥", category: "Database" },

    // DevOps & Tools
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "Kubernetes", icon: "☸️", category: "DevOps" },
    { name: "AWS", icon: "☁️", category: "DevOps" },
    { name: "Git", icon: "🔀", category: "Tools" },
    { name: "GraphQL", icon: "🔗", category: "Tools" },
    { name: "Jest", icon: "🧪", category: "Tools" },
    { name: "Webpack", icon: "📦", category: "Tools" },
    { name: "Vite", icon: "⚡", category: "Tools" },
  ];

  const experiences: Experience[] = [
    {
      role: "Fullstack Developer",
      company: "Tech Startup ABC",
      duration: "2023 - Hiện tại",
      description:
        "Phát triển ứng dụng web với Next.js và Node.js, tích hợp API và tối ưu hiệu suất.",
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      duration: "2021 - 2023",
      description:
        "Xây dựng giao diện người dùng với React, Tailwind CSS, và Framer Motion cho nhiều khách hàng.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 pb-16">
        {/* Glow Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        </div>

        {/* Avatar */}
        <motion.img
          src="https://i.pravatar.cc/200"
          alt="Lê Văn Tuyên"
          className="w-48 h-48 rounded-full border-4 border-teal-400 shadow-2xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Name */}
        <motion.h1
          className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Lê Văn Tuyên
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          className="mt-3 text-xl sm:text-2xl text-teal-400 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Typewriter
            words={[
              "Fullstack Developer",
              "React & Next.js Specialist",
              "Lover of Clean Code",
              "Building Scalable Web Apps",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>

        {/* About */}
        <motion.p
          className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Tôi là một lập trình viên đam mê xây dựng các ứng dụng web hiện đại, tối ưu hiệu suất và trải nghiệm người dùng. Với kinh nghiệm trong React, Next.js, và Node.js, tôi luôn hướng tới việc tạo ra sản phẩm chất lượng cao, từ giao diện đẹp mắt đến backend mạnh mẽ.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="mt-8 flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-gray-300 hover:text-teal-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-gray-300 hover:text-teal-400 transition" />
          </a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
            <FaCode className="text-3xl text-gray-300 hover:text-teal-400 transition" />
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full shadow-lg transition duration-300"
          >
            Xem Dự Án
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
          >
            Liên Hệ
          </Link>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Kỹ Năng Full-Stack
        </motion.h2>

        {/* Nhóm kỹ năng theo category */}
        {["Front-end", "Back-end", "Database", "DevOps", "Tools"].map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-6">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-teal-500/50 transition transform hover:-translate-y-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-4xl mb-3 block">{skill.icon}</span>
                    <h4 className="text-lg font-semibold text-teal-400">{skill.name}</h4>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-gray-900/50">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Dự Án Nổi Bật
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-teal-500/50 hover:-translate-y-2 transition transform"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-teal-400">{proj.title}</h3>
              <p className="text-gray-300 mt-2">{proj.desc}</p>
              <Link
                href={proj.link}
                className="inline-block mt-4 text-sm text-teal-400 hover:underline font-semibold"
              >
                Xem Chi Tiết →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Kinh Nghiệm
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-teal-500/50 transition"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-teal-400">{exp.role}</h3>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-gray-400 text-sm">{exp.duration}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-teal-500/10">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Sẵn Sàng Hợp Tác?
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Nếu bạn đang tìm kiếm một lập trình viên đam mê, sáng tạo và đáng tin cậy, hãy liên hệ với tôi. Cùng nhau, chúng ta sẽ biến ý tưởng của bạn thành hiện thực!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full shadow-lg transition duration-300"
          >
            Liên Hệ Ngay
          </Link>
        </motion.div>
      </section>
    </div>
  );
}