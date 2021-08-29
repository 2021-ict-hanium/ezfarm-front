import React from '../../../src/node_modules/@types/react';
import { IFarmView } from '../../../interfaces/data/myFarm';
import Modal from '../../common/Modal';
import { ImgTime, Stick, Wrapper } from './style';

type Props = {
    onClose: () => void;
    farmView: IFarmView;
};

const ViewModalPresenter = ({ onClose, farmView }: Props) => (
    <Modal title="실시간 화면" onCancel={onClose}>
        <Wrapper>
            <div className="img-box">
                <img src={farmView?.imageUrl} alt="이미지" />
            </div>
            <ImgTime>{farmView?.measureTime}:00</ImgTime>
            <div>
                <Stick wt={farmView?.cropCondition} />
                <span>숙도 판별 {farmView?.cropCondition}%</span>
            </div>
        </Wrapper>
    </Modal>
);

export default ViewModalPresenter;
