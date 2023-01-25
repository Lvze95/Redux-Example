export default function testReducer(state = { areaColor: 'white' }, action) {
    switch (action.type) {
        case 'CHANGE_COLOR':
            if (action.color) {
                return {
                    ...state, areaColor: action.color
                }
            }
            return state
        default:
            return state
    }
}