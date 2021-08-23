import { FormEvent } from 'react';

export interface IOnSubmit {
    (e: FormEvent<HTMLFormElement>): void;
}

export interface ISetState {
    (e: React.ChangeEvent<HTMLInputElement>): void;
}