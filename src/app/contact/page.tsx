import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

// SEO Metadata
export const metadata: Metadata = {
  title: "Liên Hệ - Lê Văn Tuyên",
  description: "Liên hệ với Lê Văn Tuyên để thảo luận về dự án hoặc cơ hội hợp tác. Gửi tin nhắn qua form hoặc kết nối qua email, LinkedIn, GitHub.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
      </div>
      <ContactForm />
    </div>
  );
}