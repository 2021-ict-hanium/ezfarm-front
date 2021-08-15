import { FarmView } from '../interfaces/data/myFarm';

export const SampleUser = {
    id: 1,
    email: 'string',
    name: 'string',
    imageUrl: 'string',
    phoneNumber: 'string',
    address: 'string',
};

export const SampleMyfarmDashboard = {
    co2: '550',
    humidity: '45',
    illuminance: '1800',
    measureDate: '2021-08-15',
    mos: '2.63',
    ph: '5.98',
    tmp: '35.8',
};

export const SampleViewList: FarmView[] = [
    {
        cropCondition: 66,
        imageUrl: 'https://placeimg.com/300/200/any',
        measureTime: 1,
    },
    {
        cropCondition: 65,
        imageUrl: 'https://placeimg.com/300/200/any',
        measureTime: 2,
    },
    {
        cropCondition: 66,
        imageUrl: 'https://placeimg.com/300/200/any',
        measureTime: 3,
    },
    {
        cropCondition: 67,
        imageUrl: 'https://placeimg.com/300/200/any',
        measureTime: 4,
    },
    {
        cropCondition: 65,
        imageUrl: 'https://placeimg.com/300/200/any',
        measureTime: 5,
    },
];

export const SampleChartData = [
    {
        name: '1월',
        온도: 36.1,
    },
    {
        name: '2월',
        온도: 36.5,
    },
    {
        name: '3월',
        온도: 36.5,
    },
    {
        name: '4월',
        온도: 35.5,
    },
    {
        name: '5월',
        온도: 35.7,
    },
    {
        name: '6월',
        온도: 36.3,
    },
];
