import * as Yup from 'yup';

export const CONTACT_SCHEMA = Yup.object().shape( {
    name: Yup.string()
        .required('Name Must'),
    email: Yup.string()
        .required( 'REQUIRED_FIELD' ).email( 'EMAIL_FIELD' ),
    phone: Yup.string()
        .required('Phone Number Must'),
    message: Yup.string()
        .required('required')
} );