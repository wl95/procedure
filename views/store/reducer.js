import { combineReducers } from 'redux'
import { TAB_LIST, TAB_MSG ,TAB_FLAG} from './actions'

export const tabList = (state = [], action) => {
    if (action.type == TAB_LIST) {
        return action.data
    }
    return state;
}

export const msg = (state = '', action) => {
    if (action.type == TAB_MSG) {
        return action.msg
    }
    return state;
}

export const flag = (state = false, action) => {
    if (action.type == TAB_FLAG) {
        return action.flag
    }
    return state;
}



export default combineReducers({
    tabList,
    msg,
    flag
})