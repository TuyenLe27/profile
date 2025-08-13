"use client";
import { motion } from "framer-motion";

interface Profile {
  name: string;
  title: string;
  location: string;
  about: string;
  skills: string[];
  avatar: string;
}

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 rounded-2xl p-8 shadow-lg max-w-md w-full text-white"
    >
      <motion.img
        src={profile.avatar}
        alt={profile.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400"
        whileHover={{ scale: 1.1 }}
      />
      <h1 className="text-3xl font-bold text-center">{profile.name}</h1>
      <p className="text-center text-teal-400">{profile.title}</p>
      <p className="text-center text-sm text-gray-400">{profile.location}</p>
      <p className="mt-4 text-center">{profile.about}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {profile.skills.map((skill, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="px-3 py-1 bg-teal-500 rounded-full text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
