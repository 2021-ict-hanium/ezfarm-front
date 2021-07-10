export interface View {
    id: number;
    url: string;
    time: number;
}

export interface FarmState {
    controlLoading: boolean;
    controlDone: boolean;
    controlError: null | string;
    viewListLoading: boolean;
    viewListDone: boolean;
    viewListError: null | string;
    viewList: Array<View> | null;
}
