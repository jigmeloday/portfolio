import { InputField } from '@/components/section/contact/model/contact.model';

export const FORM_FIELD: InputField[] = [
    {
        id: '1',
        label: 'Name',
        name: 'name'
    },
    {
        id: '2',
        label: 'Email',
        name: 'email'
    },
    {
        id: '3',
        label: 'Phone',
        name: 'phone'
    },
    {
        id: '4',
        label: 'Message',
        name: 'message'
    }
];

export const INITIAL_FORM = {
    name: '',
    email: '',
    phone: '',
    message: ''
};