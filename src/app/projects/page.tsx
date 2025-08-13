"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";

// Định nghĩa interface cho TypeScript
interface Project {
  name: string;
  desc: string;
  technologies: string[];
  demoLink?: string;
  sourceLink?: string;
  image?: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  // Memoize mảng projects
  const projects = useMemo<Project[]>(() => [
    {
      name: "Portfolio Website",
      desc: "Trang web cá nhân giới thiệu kỹ năng, kinh nghiệm và các dự án đã thực hiện. Được thiết kế với giao diện hiện đại, tối ưu SEO và hiển thị responsive trên mọi thiết bị.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://your-portfolio.com",
      sourceLink: "https://github.com/your-username/portfolio",
      image: "https://source.unsplash.com/random/800x600?portfolio",
    },
    {
      name: "E-commerce App",
      desc: "Nền tảng thương mại điện tử tích hợp giỏ hàng, thanh toán trực tuyến qua Stripe, và hệ thống quản lý sản phẩm. Tối ưu tốc độ tải trang và trải nghiệm người dùng.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://your-ecommerce-demo.com",
      sourceLink: "https://github.com/your-username/ecommerce",
      image: "https://source.unsplash.com/random/800x600?ecommerce",
    },
    {
      name: "Chat App",
      desc: "Ứng dụng trò chuyện thời gian thực sử dụng Socket.io, hỗ trợ tin nhắn văn bản, emoji, và thông báo đẩy. Được triển khai với backend Node.js mạnh mẽ.",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      demoLink: "https://your-chat-app-demo.com",
      sourceLink: "https://github.com/your-username/chat-app",
      image: "https://source.unsplash.com/random/800x600?chat",
    },
    {
      name: "Task Management Tool",
      desc: "Ứng dụng quản lý công việc với tính năng kéo thả, phân quyền người dùng, và tích hợp thông báo email. Được xây dựng để hỗ trợ làm việc nhóm hiệu quả.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      demoLink: "https://your-task-manager-demo.com",
      sourceLink: "https://github.com/your-username/task-manager",
      image: "https://source.unsplash.com/random/800x600?task",
    },
    {
      name: "Blog Platform",
      desc: "Nền tảng blog cá nhân hỗ trợ viết bài Markdown, tích hợp bình luận và SEO. Được thiết kế với giao diện tối giản và tốc độ tải nhanh.",
      technologies: ["Next.js", "MDX", "Vercel", "Disqus"],
      demoLink: "https://your-blog-demo.com",
      sourceLink: "https://github.com/your-username/blog",
      image: "https://source.unsplash.com/random/800x600?blog",
    },
    {
      name: "Weather Dashboard",
      desc: "Ứng dụng dự báo thời tiết với giao diện trực quan, tích hợp API thời tiết thời gian thực và hiển thị dữ liệu theo biểu đồ. Hỗ trợ đa ngôn ngữ và tối ưu mobile.",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      demoLink: "https://your-weather-demo.com",
      sourceLink: "https://github.com/your-username/weather-dashboard",
      image: "https://source.unsplash.com/random/800x600?weather",
    },
  ], []); // Dependencies rỗng vì projects là tĩnh

  // Memoize danh sách công nghệ
  const technologies = useMemo(() => ["all", ...new Set(projects.flatMap((p) => p.technologies))], [projects]);

  // Memoize danh sách dự án được lọc
  const filteredProjects = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.technologies.includes(filter))),
    [filter, projects]
  );

  // Debug số lượng dự án
  useEffect(() => {
    console.log(`Số dự án gốc: ${projects.length}`);
    console.log(`Số dự án sau lọc: ${filteredProjects.length}`);
    console.log(`Bộ lọc hiện tại: ${filter}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]); // Chỉ cần filter vì filteredProjects và projects đã memoized

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
      </div>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-teal-400 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Dự Án Của Tôi
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dưới đây là một số dự án tiêu biểu mà tôi đã thực hiện, thể hiện kỹ năng full-stack từ giao diện người dùng đến backend và triển khai. Mỗi dự án được xây dựng với sự tập trung vào hiệu suất, trải nghiệm người dùng, và mã nguồn sạch.
        </motion.p>

        {/* Filter */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                filter === tech
                  ? "bg-teal-500 text-black"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-300 col-span-full">
              Không có dự án nào phù hợp với bộ lọc.
            </p>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.li
                key={`${project.name}-${index}`}
                className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-teal-400 hover:shadow-teal-500/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={project.image ?? "https://source.unsplash.com/random/800x600?project"}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
                {/* Project Info */}
                <h2 className="text-2xl font-semibold text-white mb-2">{project.name}</h2>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={`${tech}-${i}`}
                      className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex gap-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full transition"
                    >
                      <FaExternalLinkAlt /> Xem Demo
                    </a>
                  )}
                  {project.sourceLink && (
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-full transition"
                    >
                      <FaGithub /> Source Code
                    </a>
                  )}
                </div>
              </motion.li>
            ))
          )}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Muốn Cùng Xây Dự Án Mới?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Nếu bạn có ý tưởng cho một dự án hoặc cần một lập trình viên full-stack để biến tầm nhìn của bạn thành hiện thực, hãy liên hệ với tôi! Tôi luôn sẵn sàng hợp tác và tạo ra những sản phẩm tuyệt vời.
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