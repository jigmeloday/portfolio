import * as Yup from 'yup';

export const CONTACT_SCHEMA = Yup.object().shape( {
    email: Yup.string()
        .required( 'REQUIRED_FIELD' ).email( 'EMAIL_FIELD' ),
} );