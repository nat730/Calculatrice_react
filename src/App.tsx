import { useState } from 'react';
import './App.css';

const buttonValues = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '+', '=', '0', ',', '-'];

const App = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');

  const handleButtonClick = (value: any) => {
    if (value === '=') {
        const result = Function('return ' + displayValue)();
        setDisplayValue(result);
    } else {
      if (displayValue === '0') {
        setDisplayValue(value);
        return;
      }
      setDisplayValue(displayValue + value);
    }
  };

  const rows = [];

  for (let i = 0; i < 4; i++) {
    const row = buttonValues.slice(i * 4, i * 4 + 4);
    rows.push(
      <div className="row" key={i}>
        {row.map((value, index) => (
          <button key={index} onClick={() => handleButtonClick(value)}>
            {value}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={displayValue} />
        <div className="buttons">{rows}</div>
      </div>
    </div>
  );
};

export default App;
