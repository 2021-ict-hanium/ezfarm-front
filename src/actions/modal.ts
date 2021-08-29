// 액션 상수
export const CONTROL_MODAL_OPEN = 'CONTROL_MODAL_OPEN' as const;
export const CONTROL_MODAL_CLOSE = 'CONTROL_MODAL_CLOSE' as const;

export const VIEW_MODAL_OPEN = 'VIEW_MODAL_OPEN' as const;
export const VIEW_MODAL_CLOSE = 'VIEW_MODAL_CLOSE' as const;

export const SIGN_UP_MODAL_OPEN = 'SIGN_UP_MODAL_OPEN' as const;
export const SIGN_UP_MODAL_CLOSE = 'SIGN_UP_MODAL_CLOSE' as const;

export const PROFILE_MODIFY_MODAL_OPEN = 'PROFILE_MODIFY_MODAL_OPEN' as const;
export const PROFILE_MODIFY_MODAL_CLOSE = 'PROFILE_MODIFY_MODAL_CLOSE' as const;

export const FARM_LIST_OPEN = 'FARM_LIST_OPEN' as const;
export const FARM_LIST_CLOSE = 'FARM_LIST_CLOSE' as const;

export const FARM_ENROLL_MODAL_OPEN = 'FARM_ENROLL_MODAL_OPEN' as const;
export const FARM_ENROLL_MODAL_CLOSE = 'FARM_ENROLL_MODAL_CLOSE' as const;

export const FARM_MODIFY_MODAL_OPEN = 'FARM_MODIFY_MODAL_OPEN' as const;
export const FARM_MODIFY_MODAL_CLOSE = 'FARM_MODIFY_MODAL_CLOSE' as const;

// 액션 크리에이터
export const controlModalOpen = () => ({
    type: CONTROL_MODAL_OPEN,
});

export const controlModalClose = () => ({
    type: CONTROL_MODAL_CLOSE,
});

export const viewModalOpen = () => ({
    type: VIEW_MODAL_OPEN,
});

export const viewModalClose = () => ({
    type: VIEW_MODAL_CLOSE,
});

export const signUpModalOpen = () => ({
    type: SIGN_UP_MODAL_OPEN,
});

export const signUpModalClose = () => ({
    type: SIGN_UP_MODAL_CLOSE,
});

export const profileModifyModalOpen = () => ({
    type: PROFILE_MODIFY_MODAL_OPEN,
});

export const profileModifyModalClose = () => ({
    type: PROFILE_MODIFY_MODAL_CLOSE,
});

export const farmListOpen = () => ({
    type: FARM_LIST_OPEN,
});

export const farmListClose = () => ({
    type: FARM_LIST_CLOSE,
});

export const farmEnrollModalOpen = () => ({
    type: FARM_ENROLL_MODAL_OPEN,
});

export const farmEnrollModalClose = () => ({
    type: FARM_ENROLL_MODAL_CLOSE,
});

export const farmModifyModalOpen = () => ({
    type: FARM_MODIFY_MODAL_OPEN,
});

export const farmModifyModalClose = () => ({
    type: FARM_MODIFY_MODAL_CLOSE,
});
