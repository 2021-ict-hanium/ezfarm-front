import React from '../../src/node_modules/@types/react';
import Layout from '../layout/Layout';
import SigninFormContainer from './signinForm/SigninFormContainer';
import SignupModalContainer from './signupModal/SignupModalContainer';

type Props = {
    isSignUpModalVisible: boolean;
};

const LoginPresenter = ({ isSignUpModalVisible }: Props) => (
    <Layout title="" isNavigation={false}>
        <SigninFormContainer />
        {isSignUpModalVisible && <SignupModalContainer />}
    </Layout>
);
export default LoginPresenter;
