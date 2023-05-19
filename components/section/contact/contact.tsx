import CustomContainer from '@/components/custom-container/custom-container';
import { motion } from 'framer-motion';
import { Formik } from 'formik';

import Input from '@/components/custom-input/input';
import Button from '@/components/custom-botton/button';
import TextArea from '@/components/custom-input/text-area';
import { FORM_FIELD, INITIAL_FORM } from '@/components/section/contact/constant/contact.constant';

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
            <div className='flex flex-row py-8 gap-[6%]'>
                <div className='w-[50%]'>
                    hello
                </div>
                <div className='w-[40%]'>
                    <Formik
                        initialValues={INITIAL_FORM}
                        onSubmit={(values)=> alert(values)}
                    >
                        {({
                              values,
                              handleChange,
                              handleSubmit

                          }) => (
                            <div className='w-full'>
                                {
                                    FORM_FIELD.map(({ id, name, label }) => (
                                        <Input
                                            key={id}
                                            label={label}
                                            name={name}
                                            value={values?.[name as keyof unknown]}
                                            onChange={handleChange}
                                            className='w-full'
                                        />

                                    ))
                                }

                                <TextArea cols={38} rows={10} onChange={handleChange} value={values.message} label='Message' name='message' />
                                <Button type='button' variant='contained' click={handleSubmit} label='Test' className='w-full'/>
                            </div>

                        )}
                    </Formik>
                </div>
            </div>
        </CustomContainer>
    );
}

export default Contact;