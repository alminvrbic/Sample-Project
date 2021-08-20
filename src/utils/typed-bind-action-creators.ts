import {
  ActionCreatorsMapObject,
  bindActionCreators,
  Dispatch,
} from '@reduxjs/toolkit';

type ArgumentTypesSkipOne<T> = T extends (...args: infer U) => any ? U : never;

type RemoveDispatch<T extends () => void> = T extends (
  ...args: any[]
) => (dispatch: Dispatch) => infer R
  ? (...a: ArgumentTypesSkipOne<T>) => R
  : T;

export default function typedBindActionCreators<
  M extends ActionCreatorsMapObject
>(map: M, dispatch: Dispatch) {
  return bindActionCreators<M, {[P in keyof M]: RemoveDispatch<M[P]>}>(
    map,
    dispatch,
  );
}
