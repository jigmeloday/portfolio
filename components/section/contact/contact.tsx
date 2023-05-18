import CustomContainer from '@/components/custom-container/custom-container';
import { motion } from 'framer-motion';
import { Formik } from 'formik';

import Input from '@/components/custom-input/input';
import Button from '@/components/custom-botton/button';

function Contact() {
    return(
        <CustomContainer>
            <motion.h1
                initial={ { opacity: 0, y: - 100 } }
                whileInView={ { opacity: 1, y: 0 } }
                viewport={ { once: true, amount: 0.9 } }
                transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                className='font-6 text-[32px] text-primary-main text-center lg:text-start'
            >
                Contact Me
            </motion.h1>
            <div className='py-8'>
                <Formik
                    initialValues={{ test: '' }}
                    onSubmit={(values)=> alert(values)}
                >
                    {({
                          values,
                          handleChange,
                          handleSubmit

                      }) => (
                         <div className='w-full'>
                             <Input
                                 label='Test'
                                 name='test'
                                 value={values?.test}
                                 onChange={handleChange}
                                 width='250px'
                             />
                             <Button click={handleSubmit} label='Test' />
                         </div>

                    )}
                </Formik>
            </div>
        </CustomContainer>
    );
}

export default Contact;