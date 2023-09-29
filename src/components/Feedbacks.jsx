import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Card = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-7 rounded-3xl xs:w-[350px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-7 flex justify-between items-center gap-1'>
      <div>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
        <p className='mt-1 text-secondary text-[12px]'>
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className='w-10 h-10 rounded-full object-cover'
      />
    </div>
  </motion.div>
);

const Testimonials = () => (
  <div className='mt-12 bg-black-100 rounded-[20px]'>
    <div className={`bg-tertiary rounded-2xl min-h-[300px] ${styles.padding}`}>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Certification.</h2>
      </motion.div>
    </div>
    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index) => (
        <Card key={testimonial.name} index={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Testimonials, "");
