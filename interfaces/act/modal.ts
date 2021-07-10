import {
    controlModalOpen,
    controlModalClose,
    viewModalOpen,
    viewModalClose,
    signUpModalClose,
    signUpModalOpen,
    profileModifyModalOpen,
    profileModifyModalClose,
} from '../../actions/modal';

export type ModalAction =
    | ReturnType<typeof controlModalOpen>
    | ReturnType<typeof controlModalClose>
    | ReturnType<typeof viewModalOpen>
    | ReturnType<typeof viewModalClose>
    | ReturnType<typeof signUpModalOpen>
    | ReturnType<typeof signUpModalClose>
    | ReturnType<typeof profileModifyModalOpen>
    | ReturnType<typeof profileModifyModalClose>;
