/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */

import { MyfarmFormData } from '../interfaces/data/farm';

export const ViewListData = [
    {
        id: 1,
        url: '/images/sample/placeimg_300_200_any.jpg',
        time: 1,
    },
    {
        id: 2,
        url: '/images/sample/placeimg_300_200_any (1).jpg',
        time: 2,
    },
    {
        id: 3,
        url: '/images/sample/placeimg_300_200_any (2).jpg',
        time: 3,
    },
    {
        id: 4,
        url: '/images/sample/placeimg_300_200_any (3).jpg',
        time: 4,
    },
    {
        id: 5,
        url: '/images/sample/placeimg_300_200_any (4).jpg',
        time: 5,
    },
    {
        id: 6,
        url: '/images/sample/placeimg_300_200_any (5).jpg',
        time: 6,
    },
    {
        id: 7,
        url: '/images/sample/placeimg_300_200_any (6).jpg',
        time: 7,
    },
];

export const SampleUser = {
    id: 1,
    email: 'string',
    name: 'string',
    imageUrl: 'string',
    phoneNumber: 'string',
    address: 'string',
};

export const Koreanization = (value: string) => {
    if (value === 'GLASS') return '유리';
    if (value === 'VINYL') return '비닐';
    if (value === 'PAPRIKA') return '파프리카';
    if (value === 'STRAWBERRY') return '딸기';
    if (value === 'TOMATO') return '토마토';
};
