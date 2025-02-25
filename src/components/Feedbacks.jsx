/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ 
    index, 
    testimonial,
    name,
    designation,
    company,
    image,
    linkedIn,
    companyLink,
}) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)} className='bg-black-200 p-10 rounded-3xl md:w-1/2 w-full'>
    <p className='text-white font-black text-[48px]'>&quot;</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@ </span>
            <a href={linkedIn} className='underline' target='_blank'>{name}</a>
          </p>
          <p className='mt-1 text-secondary text-[12px]'>{designation} at <spam> </spam> 
            <a href={companyLink} className='underline' target='_blank'>{company}</a>
         </p>
        </div>
        <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover' />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-10 pb-14 flex flex-wrap gap-7
          justify-around`}>
        {testimonials.map((testimonial, i) => (
          <FeedbackCard key={testimonial.name} index={i} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")
