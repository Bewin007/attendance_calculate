import React from 'react';
import {
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

function NumberInputComponent({ placeholder, onChange, size }) {
  return (
    <div className='input-box-wrapper'>
      <NumberInput>
        <NumberInputField
          placeholder={placeholder}
          onChange={onChange}
          size={size}
        />
      </NumberInput>
    </div>
  );
}

export default NumberInputComponent;
