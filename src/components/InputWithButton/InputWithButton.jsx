import React, { useState } from 'react';
import './inputWithButton.scss';

const InputWithButton = ({ defaultValue, maxValue }) => {
  const [showMax, setShowMax] = useState(true);

  const [value, setValue] = useState(defaultValue || 0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onClickMax = () => {
    setValue(maxValue);
    setShowMax(false);
  };

  return (
    <div className="embed-submit-field">
      <input
        type="text"
        inputMode="decimal"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        pattern="^[0-9]*[.,]?[0-9]*$"
        value={value}
        onChange={handleChange}
      />
      {showMax && <button onClick={onClickMax}>MAX</button>}
    </div>
  );
};

export default InputWithButton;
