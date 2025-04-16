import { useEffect, useState } from "react";
import { useLanguage } from "../Lang"; // 🔁 Your global language hook

export default function TeamSection() {
  const { lang } = useLanguage();
  const [data, setData] = useState<{
    heading: { en: string; hi: string };
    subheading: { en: string; hi: string };
    members: any[];
  }>({
    heading: { en: "", hi: "" },
    subheading: { en: "", hi: "" },
    members: []
  });

  useEffect(() => {
    fetch("/Team.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <section className="min-h-[70vh] bg-[#EDEAE4] px-6 md:px-12 text-center py-20 mt-20">
      <h2 className="text-3xl md:text-6xl font-bold text-[#2D4122] mb-4">
        {data.heading[lang]}
      </h2>
      <p className="text-md md:text-lg text-[#2D4122]/80 mb-12 max-w-3xl mx-auto">
        {data.subheading[lang]}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-10">
        {data.members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 w-72 text-[#2D4122] transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-[#A1C487]"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <div className="bg-[#A1C487]/20 text-[#2D4122] px-3 py-1 rounded-full text-xs font-semibold mt-1 inline-block mb-4">
              {member.role[lang]}
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href={`mailto:${member.email}`}
                className="bg-[#2D4122] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#4B6F44]"
              >
                Email
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2D4122] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#4B6F44]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
