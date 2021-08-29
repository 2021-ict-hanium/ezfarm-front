import { useCallback } from '../../../src/node_modules/@types/react';
import { useDispatch, useSelector } from '../../../src/node_modules/react-redux';
import { signUpModalClose } from '../../../actions/modal';
import { signUpClear } from '../../../actions/user';
import { RootState } from '../../../src/reducers';
import SignupModalPresenter from './SignupModalPresenter';

const SignupModalContainer = () => {
    const dispatch = useDispatch();

    const { signUpDone } = useSelector((state: RootState) => state.user);

    const onOk = useCallback(() => {
        dispatch(signUpClear());
        dispatch(signUpModalClose());
    }, [dispatch]);

    const onClose = useCallback(() => {
        dispatch(signUpModalClose());
    }, [dispatch]);

    return <SignupModalPresenter onOk={onOk} onClose={onClose} signUpDone={signUpDone} />;
};
export default SignupModalContainer;
