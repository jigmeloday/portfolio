import { ExpModel } from '@/components/section/exp/model/exp.model';

export const EXP_DUMMY: ExpModel[] = [
    {
        id: '1',
        title: 'SELISE',
        joined: 'Month 1',
        currently: true,
        stack:[
            {
                id: '1',
                name: 'React'
            },
            {
                id: '1',
                name: 'Angular'
            }
        ]
    },
    {
        id: '2',
        title: 'Dragon Coder',
        joined: 'Month 1',
        currently: false,
        ended: 'Month 1',
        stack:[
            {
                id: '1',
                name: 'React'
            }
        ]
    },
    {
        id: '3',
        joined: 'Month 1',
        currently: false,
        ended: 'Month 1',
        title: 'Bhutan Data Science'
    }
];