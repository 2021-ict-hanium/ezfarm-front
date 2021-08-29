/* eslint-disable no-restricted-syntax */
/* eslint-disable react/display-name */

import { IChartData } from '../interfaces/data/myFarm';

/* eslint-disable import/prefer-default-export */
export const baseURL = 'https://api.hanium-ezfarm.com/';

export const koreanization = (value: string) => {
    if (value === 'GLASS') return '유리';
    if (value === 'VINYL') return '비닐';
    if (value === 'PAPRIKA') return '파프리카';
    if (value === 'STRAWBERRY') return '딸기';
    if (value === 'TOMATO') return '토마토';
};

export const fromDateToNow = (startDate: string) => {
    let sdt = new Date(startDate);
    let edt = new Date();
    let dateDiff = Math.ceil((edt.getTime() - sdt.getTime()) / (1000 * 3600 * 24));
    return dateDiff;
};
const z2 = (v: number) => {
    const s = `00${String(v)}`;
    return s.substr(s.length - 2, 2);
};
export const getFacilityRequestParams = (term: string, selectDate: string) => {
    if (term === 'DAY') {
        const [year, month] = selectDate.split('-');
        console.log(year, month);
        return {
            year,
            month,
        };
    }
    if (term === 'WEEK') {
        const [year, quarter] = selectDate.split('-');
        const q = Number(quarter[1]);
        return {
            dateOne: `${year}-${z2(1 + 3 * (q - 1))}`,
            dateTwo: `${year}-${z2(2 + 3 * (q - 1))}`,
            dateThr: `${year}-${z2(3 + 3 * (q - 1))}`,
        };
    }
    if (term === 'MONTH') {
        return {
            year: selectDate,
        };
    }
};

export const urlName = (term: string) => {
    if (term === 'DAY') return 'daily';
    if (term === 'WEEK') return 'week';
    if (term === 'MONTH') return 'monthly';
};

export const generateChartData = (data: Array<any>) => {
    const chartData: IChartData = {
        avgCo2: [],
        avgHumidity: [],
        avgIlluminance: [],
        avgMos: [],
        avgPh: [],
        avgTmp: [],
    };
    for (let ele of data) {
        chartData.avgCo2.push({
            name: ele.measureDate,
            CO2: ele.avgCo2,
        });
        chartData.avgHumidity.push({
            name: ele.measureDate,
            습도: ele.avgHumidity,
        });
        chartData.avgIlluminance.push({
            name: ele.measureDate,
            조도: ele.avgIlluminance,
        });
        chartData.avgMos.push({
            name: ele.measureDate,
            급액: ele.avgMos,
        });
        chartData.avgPh.push({
            name: ele.measureDate,
            PH: ele.avgPh,
        });
        chartData.avgTmp.push({
            name: ele.measureDate,
            온도: ele.avgTmp,
        });
    }
    return chartData;
};
