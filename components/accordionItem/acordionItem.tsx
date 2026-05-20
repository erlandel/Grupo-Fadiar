"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Leader {
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

interface AccordionItemProps {
  title: string;
  content: string | string[];
  leaders?: Leader[];
}

export default function AccordionItem({ title, content, leaders }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const items = Array.isArray(content) ? content : [content];

  return (
    <div
      className={`w-full rounded-lg shadow-xl cursor-pointer transition-all duration-300 ${isOpen ? "bg-dark text-white" : "bg-white text-dark"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center p-6">
        <h3 className={`text-4xl font-bold ${isOpen ? "text-white" : "text-dark"}`}>
          {title}
        </h3>
        {isOpen ? (
          <div className="bg-white p-1.5 rounded-full">
            <ChevronUp className="h-7 w-7 text-dark" strokeWidth={3} />
          </div>
        ) : (
          <div className="bg-dark p-1.5 rounded-full">
            <ChevronDown className="h-7 w-7 text-white" strokeWidth={3} />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="p-6 pt-0 text-white text-xl text-justify">
          {leaders ? (
            <ul className="flex flex-col divide-y-2 divide-white/20">
              {leaders.map((leader, index) => (
                <li key={index} className="flex flex-col  py-4 first:pt-0">
                  <div className="flex items-start gap-4">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={180}
                      height={180}
                      className="rounded-md object-cover shrink-0"
                    />
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-2xl">{leader.name}</span>
                      <p className="text-xl text-white/80">{leader.shortDescription}</p>
                    </div>
                  </div>
                  <p className="text-xl text-white/80">{leader.fullDescription}</p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-col gap-2">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}