"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div>
      <section
        className="w-full mx-auto px-4 flex flex-col md:flex-row items-center gap-12 text-gray-100 justify-center pb-32 bg-gray-950 pt-25"
        id="about"
      >
        {/* Text area */}
        <motion.div
          className="md:w-1/2 order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6"><span className="text-blue-500">Who</span> I Am</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Hi, I’m Colby Acton — someone who loves learning, building, and finding creative ways to solve problems. I’m polite, easy to get along with, and always 
            up for a good conversation. I’ve got a real passion for technology and enjoy spending time working on projects that challenge me and help me grow.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 pt-6">
           But I’m not just about computers and screens — I also really enjoy being outside and doing hands-on work. Whether I’m working with tools or writing code, 
           I’m happiest when I’m creating something useful and learning along the way.
          </p>
        </motion.div>

        {/* Image area */}
        <motion.div
          className="md:w-1/2 max-w-sm rounded-lg overflow-hidden shadow-lg order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/golden-retriever-tongue-out.jpg"
            alt="Golden Retriever"
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>
      </section>

      <section
        className="w-full mx-auto px-4 flex flex-col md:flex-row items-center gap-12 text-gray-100 justify-center pb-32 bg-gray-950"
      >
        {/* Text area */}
        <motion.div
          className="md:w-1/2 order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6"><span className="text-blue-500">Where</span> I’m From</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I’m an Indigenous student from the small town of Sackville, New Brunswick. After high school, I moved to Fredericton to study Civil Engineering at UNB,
            but I quickly realized it wasn’t the right path for me. So, I stepped away from school and spent some time working jobs like lawn care and trail 
            construction with the City of Fredericton and UNB. Those jobs taught me a lot — how to be responsible, stay disciplined, and solve problems on the fly. 
            But most importantly, they gave me the space to figure out what I really wanted. That’s when I realized my true passion is technology. I ended up 
            enrolling in the Programmer Analyst program at NBCC, where I’ve been learning how to build things with code, think critically, and solve problems in 
            more creative ways.

          </p>
        </motion.div>

        {/* Image area */}
        <motion.div
          className="md:w-1/2 max-w-sm rounded-lg overflow-hidden shadow-lg order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/golden-retriever-tongue-out.jpg"
            alt="Golden Retriever"
            className="w-full h-auto object-cover rounded-lg"
          />
        </motion.div>
      </section>
    </div>
  );
}
