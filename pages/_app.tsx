import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileModifyModal from '../components/ProfileModifyModal';
import { RootState } from '../reducers';
import wrapper from '../store/configureStore';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const dispatch = useDispatch();
    const { isProfileModifyModalVisible } = useSelector((state: RootState) => state.modal);

    return (
        <>
            <Component {...pageProps} />
            {isProfileModifyModalVisible && <ProfileModifyModal />}
        </>
    );
};
export default wrapper.withRedux(MyApp);
