"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode, FaBook, FaRocket } from "react-icons/fa";
import { ReactElement } from "react";

// Định nghĩa interface cho TypeScript
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface CoreValue {
  title: string;
  description: string;
  icon: ReactElement;
}

interface Book {
  title: string;
  author: string;
  link: string;
}

export default function About() {
  const timeline: TimelineEvent[] = [
    {
      year: "2021",
      title: "Bắt đầu hành trình lập trình",
      description:
        "Khám phá lập trình web với HTML, CSS, JavaScript và bắt đầu với React. Tham gia các dự án nhỏ để xây dựng portfolio.",
    },
    {
      year: "2022",
      title: "Freelance Frontend Developer",
      description:
        "Làm việc tự do, xây dựng giao diện web với React và Tailwind CSS cho nhiều khách hàng, học thêm TypeScript để cải thiện chất lượng code.",
    },
    {
      year: "2023",
      title: "Fullstack Developer tại Tech Startup ABC",
      description:
        "Phát triển full-stack với Next.js, Node.js, và MongoDB. Tích hợp API, tối ưu hiệu suất và triển khai ứng dụng trên AWS.",
    },
    {
      year: "2024 - Hiện tại",
      title: "Dẫn dắt các dự án cá nhân và cộng đồng",
      description:
        "Xây dựng các dự án open-source, đóng góp cho cộng đồng developer và nghiên cứu các công nghệ mới như Svelte, Go, và Kubernetes.",
    },
  ];

  const coreValues: CoreValue[] = [
    {
      title: "Chất lượng",
      description:
        "Luôn đặt chất lượng code và trải nghiệm người dùng lên hàng đầu, đảm bảo sản phẩm bền vững và dễ bảo trì.",
      icon: <FaCode className="text-4xl text-teal-400" />,
    },
    {
      title: "Học hỏi",
      description:
        "Không ngừng nghiên cứu công nghệ mới, tham gia cộng đồng và chia sẻ kiến thức để phát triển bản thân.",
      icon: <FaBook className="text-4xl text-teal-400" />,
    },
    {
      title: "Sáng tạo",
      description:
        "Tìm kiếm giải pháp sáng tạo và hiệu quả để giải quyết vấn đề, mang lại giá trị tối đa cho dự án.",
      icon: <FaRocket className="text-4xl text-teal-400" />,
    },
  ];

  const favoriteBooks: Book[] = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      link: "https://www.amazon.com/Pragmatic-Programmer-Journey-Mastery-Anniversary/dp/0135957052",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-teal-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Về Tôi
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Xin chào! Tôi là <span className="text-teal-300 font-semibold">Lê Văn Tuyên</span>, một lập trình viên Fullstack Developer đam mê xây dựng các ứng dụng web hiện đại, tối ưu hiệu suất và mang lại trải nghiệm người dùng tuyệt vời. Với kinh nghiệm làm việc với <span className="text-yellow-300">React</span>, <span className="text-blue-300">Next.js</span>, <span className="text-pink-300">Tailwind CSS</span>, và <span className="text-green-300">Node.js</span>, tôi luôn hướng tới việc tạo ra sản phẩm chất lượng cao, từ giao diện đẹp mắt đến backend mạnh mẽ.
        </motion.p>
      </section>

      {/* Journey Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Hành Trình Của Tôi
        </motion.h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-teal-400 h-full"></div>
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-1/2 px-6">
                <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-teal-500/50 transition">
                  <h3 className="text-xl font-semibold text-teal-400">{event.title}</h3>
                  <p className="text-gray-400 text-sm">{event.year}</p>
                  <p className="text-gray-300 mt-2">{event.description}</p>
                </div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Giá Trị Cốt Lõi
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-teal-500/50 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400">{value.title}</h3>
              <p className="text-gray-300 mt-2">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hobbies & Books Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Sở Thích & Đam Mê
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ngoài lập trình, tôi yêu thích đọc sách về công nghệ và phát triển bản thân. Những cuốn sách như <span className="text-teal-300">{"Clean Code"}</span> của Robert C. Martin và <span className="text-teal-300">{"The Pragmatic Programmer"}</span> của Andrew Hunt & David Thomas đã truyền cảm hứng mạnh mẽ cho tôi trong việc viết code sạch và hiệu quả. Tôi cũng thích nghiên cứu các xu hướng công nghệ mới, từ AI đến Web3, và thường xuyên tham gia các cộng đồng developer để học hỏi và chia sẻ kiến thức. Khi rảnh rỗi, tôi hay nghe nhạc lo-fi và khám phá các quán cà phê để tìm cảm hứng sáng tạo.
        </motion.p>
        {/* Favorite Books */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {favoriteBooks.map((book, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-teal-500/50 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-teal-400">{book.title}</h3>
              <p className="text-gray-300 mt-2">Tác giả: {book.author}</p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-teal-300 hover:underline"
              >
                Tìm hiểu thêm →
              </a>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="px-8 py-3 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full shadow-lg transition duration-300"
          >
            Kết Nối Với Tôi
          </Link>
        </motion.div>
      </section>
    </div>
  );
}