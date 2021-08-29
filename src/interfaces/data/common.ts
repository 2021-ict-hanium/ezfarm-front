import { FormEvent } from '../../src/node_modules/@types/react';

export interface IOnSubmit {
    (e: FormEvent<HTMLFormElement>): void;
}

export interface ISetState {
    (e: React.ChangeEvent<HTMLInputElement>): void;
}
