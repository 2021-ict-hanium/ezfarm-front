import {
    controlModalOpen,
    controlModalClose,
    viewModalOpen,
    viewModalClose,
    signUpModalClose,
    signUpModalOpen,
    profileModifyModalOpen,
    profileModifyModalClose,
    farmListOpen,
    farmListClose,
    farmEnrollModalClose,
    farmEnrollModalOpen,
    farmModifyModalClose,
    farmModifyModalOpen,
} from '../../actions/modal';

export type ModalAction =
    | ReturnType<typeof controlModalOpen>
    | ReturnType<typeof controlModalClose>
    | ReturnType<typeof viewModalOpen>
    | ReturnType<typeof viewModalClose>
    | ReturnType<typeof signUpModalOpen>
    | ReturnType<typeof signUpModalClose>
    | ReturnType<typeof profileModifyModalOpen>
    | ReturnType<typeof profileModifyModalClose>
    | ReturnType<typeof farmListOpen>
    | ReturnType<typeof farmListClose>
    | ReturnType<typeof farmEnrollModalOpen>
    | ReturnType<typeof farmEnrollModalClose>
    | ReturnType<typeof farmModifyModalOpen>
    | ReturnType<typeof farmModifyModalClose>;
