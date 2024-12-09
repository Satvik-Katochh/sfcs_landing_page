"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Our production efficiency increased by 35% after implementing this shop floor control system. The real-time tracking is a game-changer.",
    imageSrc: avatar1.src,
    name: "Michael Rodriguez",
    username: "@manufacturingpro",
  },
  {
    text: "The detailed analytics have helped us identify and eliminate production bottlenecks we didn't even know existed.",
    imageSrc: avatar2.src,
    name: "Elena Thompson",
    username: "@operationsmanager",
  },
  {
    text: "Seamless integration with our existing machinery made this system incredibly easy to adopt across our entire production floor.",
    imageSrc: avatar3.src,
    name: "David Chen",
    username: "@techmanufacturing",
  },
  {
    text: "We've dramatically reduced downtime and improved our overall equipment effectiveness (OEE) with this innovative solution.",
    imageSrc: avatar4.src,
    name: "Sarah Kumar",
    username: "@manufacturinglean",
  },
  {
    text: "The predictive maintenance features have saved us thousands in unexpected equipment repairs and downtime.",
    imageSrc: avatar5.src,
    name: "Robert Garcia",
    username: "@factorysolutions",
  },
  {
    text: "Real-time performance tracking has transformed how we manage and motivate our production teams.",
    imageSrc: avatar6.src,
    name: "Jennifer Wong",
    username: "@manufacturingtech",
  },
  {
    text: "Our quality control has improved significantly with the system's detailed tracking and reporting capabilities.",
    imageSrc: avatar7.src,
    name: "Alex Patel",
    username: "@qualitymanager",
  },
  {
    text: "Integrated IoT capabilities have given us unprecedented visibility into our manufacturing processes.",
    imageSrc: avatar8.src,
    name: "Mark Johnson",
    username: "@iottechnology",
  },
  {
    text: "The customizable dashboards allow us to track exactly the metrics that matter most to our specific production needs.",
    imageSrc: avatar9.src,
    name: "Lisa Martinez",
    username: "@manufacturinginsights",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            Discover how our Shop Floor Control System is driving efficiency and
            innovation across manufacturing environments.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
