import { ColorActions, ColorAddAction } from './animali.action';
import { ColorListState } from './animali.model';
import { Action } from 'redux';

export const INITIAL_STATE: ColorListState = {
  colorList: []
};

export function colorReducer(state: ColorListState = INITIAL_STATE,
    action: Action): ColorListState {

  switch (action.type) {
    case ColorActions.LOAD_COLORS:
      return {
        colorList: ['red', 'green']
      };

    case ColorActions.ADD_COLORS:
      const colorAddAction = action as ColorAddAction;

      return {
        colorList: [...state.colorList, ...colorAddAction.payload]
      };

    case ColorActions.REMOVE_LAST_COLOR:
      return {
        colorList: state.colorList.slice(0, state.colorList.length -1)
      };
  }

  return state;
}
