import CustomContainer from '@/components/custom-container/custom-container';
import { motion } from 'framer-motion';
import { Formik } from 'formik';
import Input from '@/components/custom-input/input';
import Button from '@/components/custom-botton/button';
import TextArea from '@/components/custom-input/text-area';
import { FORM_FIELD, INITIAL_FORM } from '@/components/section/contact/constant/contact.constant';
import ContactInfo from '@/components/section/contact/contact-info';
import { CONTACT_SCHEMA } from '@/components/section/contact/schema/contact.schema';
import CustomHeader from '@/components/custom-header/custom-header';
import SectionContainer from '@/components/custom-container/section-container';

function Contact() {

    return (
        <CustomContainer>
            <SectionContainer>
                <CustomHeader text='GET IN TOUCH' />
               <div className='flex flex-col py-[24px] items-center lg:items-start text-justify w-full'>
                   <motion.div
                       initial={ { opacity: 0,  y: 100 } }
                       whileInView={ { opacity: 1, y: 0 } }
                       viewport={ { once: true, amount: 0.9 } }
                       transition={ { duration: 0.6, delay: 0.5 } }
                   >
                       <h1 className='font-8 text-[16px] md:text-[34px] lg:text-[26px]'>
                           Contact Me
                       </h1>
                   </motion.div>
                   <div className='flex md:flex-row flex-col pt-8 gap-[20%] w-full'>
                       <ContactInfo />
                       <div className='w-full py-[28px]'>
                           <Formik
                               initialValues={ INITIAL_FORM }
                               validationSchema={ CONTACT_SCHEMA }
                               onSubmit={ ( values ) => alert( values ) }
                           >
                               { ( {
                                       values,
                                       handleChange,
                                       handleSubmit,
                                       errors,
                                       handleBlur,
                                       touched,
                                   } ) => (
                                   <div
                                       className='lg:w-[80%]'>
                                       {
                                           FORM_FIELD.map( ( { id, name, label } ) => (
                                               <motion.div
                                                   initial={ { opacity: 0,  y: 100 } }
                                                   whileInView={ { opacity: 1, y: 0 } }
                                                   viewport={ { once: true, amount: 0.9 } }
                                                   transition={ { duration: 0.6, delay: 0.5 } }
                                                   className='py-[12px]' key={id}>
                                                   {
                                                       name !== 'message' ?
                                                           <div>
                                                               <Input
                                                                   key={ id }
                                                                   label={ label }
                                                                   name={ name }
                                                                   onBlur={ handleBlur }
                                                                   value={ values?.[ name as keyof unknown ] }
                                                                   onChange={ handleChange }
                                                                   className='w-full'
                                                               />
                                                               {
                                                                   touched[name as keyof unknown]
                                                                   && errors[name as keyof unknown] &&
                                                                   <motion.span
                                                                       initial={{ opacity: 0}}
                                                                       animate={{ opacity: 1}}
                                                                       transition={{ duration: 0.5 }}
                                                                       className='font-3 absolute text-[14px] text-text-error'
                                                                   >{errors[name as keyof unknown]}
                                                                   </motion.span>
                                                               }
                                                           </div>
                                                           : <div
                                                               className='py-[12px]'>
                                                               <TextArea
                                                                   onBlur={handleBlur}
                                                                   cols={ 38 } rows={ 10 } onChange={ handleChange } value={ values.message }
                                                                   label='Message' name='message'/>
                                                               <div className='relative pb-[12px] h-fit'>
                                                                   {
                                                                       touched.message
                                                                       && errors.message &&
                                                                       <motion.span
                                                                           initial={{ opacity: 0}}
                                                                           animate={{ opacity: 1}}
                                                                           exit={{ opacity: 0 }}
                                                                           transition={{ duration: 0.5 }}
                                                                           className='font-3 absolute text-[14px] text-text-error'
                                                                       >{errors.message}
                                                                       </motion.span>
                                                                   }
                                                               </div>
                                                           </div>
                                                   }
                                               </motion.div>

                                           ) )
                                       }
                                       <motion.div
                                           initial={{ opacity: 0 }}
                                           whileInView={ { opacity: 1} }
                                           viewport={ { once: true, amount: 0.9 } }
                                           transition={ { delay: 0.5, duration: 0.5 } }
                                           className='py-[12px]'>
                                           <Button type='button' variant='contained' click={ handleSubmit } label='SEND'
                                                   className='w-full'/>
                                       </motion.div>
                                   </div>

                               ) }
                           </Formik>
                       </div>
                   </div>
               </div>
            </SectionContainer>
        </CustomContainer>
    );
}

export default Contact;