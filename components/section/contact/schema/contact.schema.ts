import * as Yup from 'yup';

export const CONTACT_SCHEMA = Yup.object().shape( {
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .required( 'Email is required' ).email( 'Email must be a valid email' ),
    phone: Yup.string()
        .required('Phone Number is required'),
    message: Yup.string()
        .required('Message is required').min(200, 'Message must contain 200 ')
} );