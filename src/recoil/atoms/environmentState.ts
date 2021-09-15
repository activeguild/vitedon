import { atom } from 'recoil';

export type EnvironmentState = {
  foo: string;
};

export const environmentState = atom<EnvironmentState>({
  key: 'environmentState',
  default: { foo: '' },
});
