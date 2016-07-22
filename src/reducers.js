
'use strict';

import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

// state 树
// {
//   visibilityFilter: 'SHOW_ALL',
//   todos: [
//     {
//       text: 'Consider using Redux',
//       completed: true,
//     },
//     {
//       text: 'Keep all state in a single tree',
//       completed: false
//     }
//   ]
// }

// 只管理了state中的 visibilityFilter
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
    case SET_VISIBILITY_FILTER:
        return action.filter
    default:
        return state
    }
}

// 只管理了state中的 todos
function todos(state = [], action) {
    switch (action.type) {
    case ADD_TODO:
        return [
            ...state,
            {
                text: action.text,
                completed: false
            }
        ];
    case COMPLETE_TODO:
        return [
            ...state.slice(0, action.index),
            Object.assign({}, state[action.index], {completed: true}),
            ...state.slice(action.index + 1)
        ];
    default:
        return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;
