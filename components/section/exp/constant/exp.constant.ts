import { ExpModel } from '@/components/section/exp/model/exp.model';

export const EXP_DUMMY: ExpModel[] = [
    {
        id: '1',
        title: 'Full Time',
        company: 'SELISE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        joined: 'JAN 2021',
        stack:[
            {
                id: '11',
                name: 'React'
            },
            {
                id: '12',
                name: 'Angular'
            }
        ]
    },
    {
        id: '2',
        title: 'Full Time',
        company: 'SELISE',
        description: '                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n',
        joined: 'JAN 2021',
        stack:[
            {
                id: '21',
                name: 'React'
            },
            {
                id: '22',
                name: 'Angular'
            },
            {
                id: '23',
                name: 'React Native'
            }
        ]
    },
    {
        id: '3',
        title: 'Full Time',
        company: 'SELISE',
        description: '                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n',
        joined: 'JAN 2021',
        stack:[
            {
                id: '31',
                name: 'React'
            },
            {
                id: '32',
                name: 'Angular'
            },
            {
                id: '33',
                name: 'Node js'
            }
        ]
    }
];