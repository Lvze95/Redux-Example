import { useDispatch, useSelector } from "react-redux";
import { changeButtonColor, changeColor } from "./actions/buttonActions";
import ColorComponent from "./ColorComponent";
function App() {
  const dispatch = useDispatch();
  const color = useSelector(state => state.buttonReducer?.buttonColor) || 'white'
  const color2 = useSelector(state => state.buttonReducer?.button2Color) || 'white'

  const onButtonClick = (color, id) => {
    dispatch(changeColor(color))
    dispatch(changeButtonColor(color, id))
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <button style={{ backgroundColor: color }} onClick={() => onButtonClick('red', 1)}>Change color to red</button><br /><br />
      <button style={{ backgroundColor: color2 }} onClick={() => onButtonClick('blue', 2)}>Change color to blue</button><br /><br />
      <button style={{ backgroundColor: color }} onClick={() => onButtonClick('black')}>Change color to black</button><br /><br />
      <button style={{ backgroundColor: color }} onClick={() => onButtonClick('orange')}>Change color to orange</button><br /><br />
      <ColorComponent />

    </div>
  );
}

export default App;
