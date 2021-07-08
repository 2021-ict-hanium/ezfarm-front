import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import Layout from '../layout/Layout';
import { RootState } from '../reducers';

const Login = () => {
    const router = useRouter();
    const { me } = useSelector((state: RootState) => state.user);

    const [showSignupModal, setShowSignupModal] = useState(false);

    const handleSignupModal = () => {
        setShowSignupModal((prev) => !prev);
    };

    useEffect(() => {
        if (me) {
            router.push('/');
        }
    }, [router, me]);
    return (
        <Layout title="HOME">
            <>
                <LoginForm />
                {/* {showSignUpModal && <SignupForm>} */}
            </>
        </Layout>
    );
};

export default Login;
