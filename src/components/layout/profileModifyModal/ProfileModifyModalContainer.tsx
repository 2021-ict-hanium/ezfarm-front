import { useCallback, useState, useRef, ChangeEvent, FormEvent, useEffect } from '../../../src/node_modules/@types/react';
import { useDispatch, useSelector } from '../../../src/node_modules/react-redux';
import { profileModifyModalClose } from '../../../actions/modal';
import { modifyProfileClear, loadProfileRequest, modifyProfileRequest } from '../../../actions/user';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../src/reducers';
import { getToken } from '../../../src/sagas';
import ProfileModifyModalPresenter from './ProfileModifyModalPresenter';

const ProfileModifyModalContainer = () => {
    const dispatch = useDispatch();
    const { me, modifyProfileLoading, modifyProfileDone, modifyProfileError } = useSelector(
        (state: RootState) => state.user,
    );

    const [currentImage, setCurrentImage] = useState(me.imageUrl);
    const [image, setImage] = useState<File | null>(null);
    const [phoneNumber, onChangePhoneNumber] = useInput(me.phoneNumber);
    const [address, onChangeAddress] = useInput(me.address);
    const [isDefaultImage, setIsDefaultImage] = useState('N');
    const [isChange, setIsChange] = useState(false);

    const imageInput = useRef<HTMLInputElement>(null);
    const imageUpload = useCallback(() => {
        if (!imageInput.current) return;
        imageInput.current.click();
    }, [imageInput]);
    const onChangeImages = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        setImage(e.target.files[0]);
        setIsDefaultImage('N');
        setIsChange(true);
    }, []);
    const removeImage = useCallback(() => {
        if (currentImage) {
            setCurrentImage(null);
        } else {
            setImage(null);
        }
        setIsDefaultImage('Y');
    }, [currentImage]);

    const onSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (isChange) {
                const data = new FormData();
                if (image) {
                    data.append('image', image);
                }
                if (phoneNumber) {
                    data.append('phoneNumber', phoneNumber);
                }
                if (address) {
                    data.append('address', address);
                }
                data.append('isDefaultImage', String(isDefaultImage));
                dispatch(modifyProfileRequest(data));
            }
        },
        [dispatch, image, phoneNumber, address, isDefaultImage, isChange],
    );

    const onClose = useCallback(() => {
        dispatch(profileModifyModalClose());
    }, [dispatch]);

    const onOk = useCallback(() => {
        dispatch(modifyProfileClear());
        dispatch(loadProfileRequest(getToken()));
        dispatch(profileModifyModalClose());
    }, [dispatch]);

    useEffect(() => {
        if (phoneNumber === me.phoneNumber && currentImage === me.imageUrl && !image && address === me.address) {
            setIsChange(false);
        } else {
            setIsChange(true);
        }
    }, [currentImage, image, phoneNumber, address, me]);

    return (
        <ProfileModifyModalPresenter
            onOk={onOk}
            onClose={onClose}
            removeImage={removeImage}
            currentImage={currentImage}
            imageInput={imageInput}
            onChangeImages={onChangeImages}
            imageUpload={imageUpload}
            me={me}
            phoneNumber={phoneNumber}
            onChangePhoneNumber={onChangePhoneNumber}
            address={address}
            onChangeAddress={onChangeAddress}
            isChange={isChange}
            modifyProfileLoading={modifyProfileLoading}
            modifyProfileDone={modifyProfileDone}
            modifyProfileError={modifyProfileError}
            onSubmit={onSubmit}
        />
    );
};
export default ProfileModifyModalContainer;
