/**
 * The todos reducer:
 *  1. Append the id to its allIds field and sets the todo within its byIds field upon receiving the ADD_TODO action
 *      意思就是把id存进allIds fields，并且在收到ADD_TODO action的时候把在byIds field的todo设定好
 * 
 *  2. Toggles the completed field for the todo upon receiving the TOGGLE_TODO action
 * 
 * The visibilityFilters reducer:
 *  It sets its slice of store to the new filter it receives from the SET_FILTER action payload.
 */

import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload; //传进来的action里的payload
            return {
                ...state, //先复制旧的state
                allIds: [...state.allIds, id],//从action传进来的id，在allIds里的id要更新成新来的id
                byIds: {
                    ...state.byIds, //先复制旧的byIds
                    [id] : { //从action传进来的id，在byIds的field里，更新新传进来的id的content，并且新传进来的todo完成状态是false
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO:{
            const {id} = action.payload;
            return {
                //先复制旧的state
                ...state,
                //只需要更新byIds里的todo state就可以，因为动作是toggle，不需要更新所有的todo，只toggle传进来的id的todo内容
                byIds:{
                    //先复制旧的byIds
                    ...state.byIds,
                    [id]:{
                        //先复制旧的id的todo内容
                        ...state.byIds[id],
                        //然后更新（toggle）completed
                        //因为所有的todo是存在byIds数组里，所以需要byIds[id]定位到我们要toggle的todo，然后.completed
                        completed: !state.byIds[id].completed
                    }
                }
            }
        }
        default://如果传进来的action什么动作都没有，就返回最初始的state
            return state;
    }
}