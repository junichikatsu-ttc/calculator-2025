import React, { useState } from 'react';
import { Button } from './components/Button';
import { PlusButton } from './components/PlusButton';

const App: React.FunctionComponent = () => {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [ope, setOpe] = useState('');

  const onClick = (key: string): void => {
    if (!Number.isNaN(Number(key))) {
      if (ope === '+') {
        setRight(right + key);
      } else {
        setLeft(left + key);
      }
    } else if (key === '+') {
      setOpe(key);
    }
  };
  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">{left}</div>
      <div className="display">{right}</div>
      <div className="input">
        <div className="numbers">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((el) => (
            <Button
              onClick={() => {
                onClick(el);
              }}
              label={el}
              key={el}
            />
          ))}
        </div>
        <div className="operators">
          <PlusButton
            onClick={() => {
              onClick('+');
            }}
            label={'+'}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
