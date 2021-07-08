import {
    realtimeControlModalOpen,
    realtimeControlModalClose,
    realtimeViewModalOpen,
    realtimeViewModalClose,
    signupModalOpen,
    signupModalClose,
} from '../../actions/modal';

export type ModalAction =
    | ReturnType<typeof realtimeControlModalOpen>
    | ReturnType<typeof realtimeControlModalClose>
    | ReturnType<typeof realtimeViewModalOpen>
    | ReturnType<typeof realtimeViewModalClose>
    | ReturnType<typeof signupModalOpen>
    | ReturnType<typeof signupModalClose>;
