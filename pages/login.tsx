import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../layout/Layout';
import { RootState } from '../reducers';
import SignUpModal from '../components/auth/SignUpModal';
import SignInForm from '../components/auth/SignInForm';
import ProfileModifyModal from '../components/ProfileModifyModal';

const Login = () => {
    const router = useRouter();
    const { me } = useSelector((state: RootState) => state.user);
    const { isSignUpModalVisible } = useSelector((state: RootState) => state.modal);

    useEffect(() => {
        if (me) {
            router.push('/');
        }
    }, [router, me]);

    return (
        <Layout title="HOME" isNavigation={false}>
            <>
                <SignInForm />
                {isSignUpModalVisible && <SignUpModal />}
            </>
        </Layout>
    );
};

export default Login;
