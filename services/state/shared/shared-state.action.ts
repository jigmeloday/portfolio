import { createAction } from '@reduxjs/toolkit';

export const setTheme = createAction( 'theme', args => ( {  payload: args } ) );
