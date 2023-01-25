export function changeColor(color) {
    return {
        type: 'CHANGE_COLOR',
        color: color
    }
}
export function changeButtonColor(color, id) {
    return {
        type: 'CHANGE_BUTTON_COLOR',
        color: color,
        id: id
    }
}