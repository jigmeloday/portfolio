import CustomContainer from '@/components/custom-container/custom-container';
import { motion } from 'framer-motion';
import { Formik } from 'formik';
import Input from '@/components/custom-input/input';
import Button from '@/components/custom-botton/button';
import TextArea from '@/components/custom-input/text-area';
import { FORM_FIELD, INITIAL_FORM } from '@/components/section/contact/constant/contact.constant';
import { CONTACT_INFO } from '@/components/icons/icons';

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
            <div className='flex lg:flex-row flex-col pt-8 gap-[6%]'>
                <div className='lg:w-[50%] w-full'>
                    <div className='flex lg:flex-col gap-[32px] my-[32px]'>
                        {
                            CONTACT_INFO.map(({ id, icon }) => (
                                <div
                                    key={id}
                                    className='flex py-[12px] lg:flex-row flex-col items-center gap-[14px] lg:justify-start justify-center'>
                                    <div className='flex bg-secondary-main h-[54px] w-[54px] rounded-full items-center justify-center cursor-pointer'>
                                        <span className='text-[18px]'>
                                            {icon}
                                        </span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-4 text-text-main'>Email</span>
                                        <span className='font-2 text-[14px] text-text-main'>jigmelodey@gmail.com</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='lg:w-[40%]  w-full'>
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