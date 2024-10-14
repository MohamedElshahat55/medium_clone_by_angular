import { createAction, props } from '@ngrx/store';
import { IRegisterData } from '../types/register';

export const register = createAction(
  '[auth] Register',
  props<{ request: IRegisterData }>()
);
