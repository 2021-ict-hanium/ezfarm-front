/* eslint-disable @typescript-eslint/ban-types */
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from '../../src/node_modules/recharts';
import styled from '../../src/node_modules/@types/styled-components';

type Props = {
    dataKey: string;
    data: Array<Object>;
};

const Chart = ({ dataKey, data }: Props) => (
    <Wrapper>
        <div className="title">{dataKey}</div>
        <div className="body">
            <LineChart width={300} height={220} data={data}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey={dataKey} stroke="#f16b6f" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    </Wrapper>
);

const Wrapper = styled.div`
    width: 330px;
    display: flex;
    flex-direction: column;
    .title {
        font-weight: 500;
        text-align: center;
    }
    .body {
        border: 1px solid #e5e5e5;
    }
`;

export default Chart;
