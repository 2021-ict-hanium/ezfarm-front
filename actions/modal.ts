// 액션 상수
export const CONTROL_MODAL_OPEN = 'CONTROL_MODAL_OPEN' as const;
export const CONTROL_MODAL_CLOSE = 'CONTROL_MODAL_CLOSE' as const;

export const VIEW_MODAL_OPEN = 'VIEW_MODAL_OPEN' as const;
export const VIEW_MODAL_CLOSE = 'VIEW_MODAL_CLOSE' as const;

export const SIGN_UP_MODAL_OPEN = 'SIGN_UP_MODAL_OPEN' as const;
export const SIGN_UP_MODAL_CLOSE = 'SIGN_UP_MODAL_CLOSE' as const;

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
