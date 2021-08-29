import { useRouter } from '../../src/node_modules/next/dist/client/router';
import { useEffect } from '../../src/node_modules/@types/react';
import { useSelector } from '../../src/node_modules/react-redux';
import { RootState } from '../../src/reducers';
import LoginPresenter from './LoginPresenter';

const LoginContainer = () => {
    const router = useRouter();
    const { logInDone } = useSelector((state: RootState) => state.user);
    const { isSignUpModalVisible } = useSelector((state: RootState) => state.modal);

    useEffect(() => {
        if (logInDone || sessionStorage.getItem('accessToken')) {
            router.push('/');
        }
    }, [router, logInDone]);
    return <LoginPresenter isSignUpModalVisible={isSignUpModalVisible} />;
};

export default LoginContainer;
