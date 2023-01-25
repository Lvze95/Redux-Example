export default function buttonReducer(state = { buttonClicked: false, button1Color: 'white', button2Color: 'white', }, action) {
    switch (action.type) {
        case 'CHANGE_BUTTON_COLOR':
            if (action.color) {
                if (action.id) {
                    if (action.id == 1) {
                        return {
                            ...state, buttonColor: action.color
                        }
                    } else if (action.id == 2) {
                        return {
                            ...state, button2Color: action.color
                        }
                    }
                }
                return {
                    ...state, buttonColor: action.color
                }
            }
        default:
            return state
    }
}