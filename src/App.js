import logo from './logo.svg';
import './App.css';
import Button from './component.js/Button';
import { useState } from 'react';

function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const changeColor = () => {
    if (colorIndex == 3) {
      setColorIndex(0);
    }
    else setColorIndex(colorIndex + 1);
  };
  const onClickHandler = (description) => {
    alert(description);

  }

  const colorList = ["green", "red", "blue"]
  console.log(colorIndex)
  return (
    <div className="App" >
      <div>
        <h3>NORMAL BUTTON</h3>
        <Button
          backgroundColor="#0092ff"
          handleClick={() => { onClickHandler("THIS IS NORMAL BUTTON"); }}
          label="Press Me"
          size="md"
        />
      </div>
      <div>
        <h3>LONG LABEL BUTTON</h3>

        <Button
          backgroundColor="#0092ff"
          handleClick={() => { onClickHandler("THIS IS LONG LABEL BUTTON "); }}
          label="Button with long label text"
          size="md"
        />
      </div>
      <div>
        <h3>BORDER BUTTON</h3>

        <Button
          border="5px solid black"
          handleClick={() => { onClickHandler("THIS IS BORDER BUTTON "); }}
          label="Button with border"
          primary
          size="lg"
        />
      </div>
      <div>
        <h3>PREFIX ICON BUTTON</h3>

        <Button
          handleClick={() => { onClickHandler("THIS IS BUTTON WITH PREFIX ICON "); }}
          label="Prifix Icon Button"
          prifixIconSrc="https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png"
          primary
          size="md"
        />
      </div>
      <div>
        <h3>THIS IS BUTTON WITH  CHANGING BACKGROUND COLOR</h3>
        <Button
          backgroundColor={colorList[colorIndex]}
          handleClick={() => {
            onClickHandler("THIS IS BUTTON WITH BACKGROUND COLOR ");
            changeColor();
          }}
          label="Button with background color"
          size="md"
        />
      </div>
         

    </div>


  );
}

export default App;
