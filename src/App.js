import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [colorName, setColorName] = useState('');
  const [colorHexCode, setColorHexCode] = useState('#FFFFFF');
  const canvasRef = useRef(null);

  const convertHandler = (event) => {
    event.preventDefault();

    const style = new Option().style;;
    style.color = colorName;

    if (!style.color) {
      alert('Please enter a valid color name.');
      return;
    }

    const canvasElement = canvasRef.current;
    const context = canvasElement.getContext('2d');
    context.fillStyle = colorName;
    context.fillRect(0, 0, canvasElement.width, canvasElement.height);
    setColorHexCode((context.fillStyle).toUpperCase());
  };

  return (
    <div className='App'>

      <div className='output'>
        <canvas ref={canvasRef} />
        <span>{colorHexCode}</span>  
      </div>

      <div>
        <form onSubmit={(e) => convertHandler(e)}>
          <input
            placeholder='Enter color name...'
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
          <button type='submit'>convert</button>
        </form>
      </div>

    </div>
  );
}

export default App;
