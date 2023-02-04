import React, { useCallback, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import NumberInputComponent from './component/numberInputComponent';
import ButtonComponent from './component/buttonComponent';
import './style/index.css';

function App() {
  // move all the state to useRef or just a variable, if that state is not going to re render the UI.
  // Having state when not needed is costly.
  // As it will rerender the component unwanted (when is not really needed to rerender)
  const [total, setData] = useState(null);
  const [absent, setabsent] = useState(null);
  const [final, setfinal] = useState(null);
  const [need, setneed] = useState(null);
  const [bunk, setbunk] = useState(null);

  const percent = useCallback(() => {
    console.log("hello");
    setfinal((absent / total) * 100);
    // eslint-disable-next-line
  }, []);

  const attend = useCallback(() => {
    if (final < 80) {
      setneed((80 - absent) * (total / 100));
      alert(need);
    } else {
      setbunk(0.8 * total - absent);
      alert(bunk);
    }
    // eslint-disable-next-line
  }, []);

  const Total = useCallback(
    event => {
      setData(parseInt(event.target.value));
    },
    // eslint-disable-next-line
    []
  );

  const Absent = useCallback(eve => {
    setabsent(parseInt(eve.target.value));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <ChakraProvider theme={theme}>
        <div className="containerHeading">
          <h1>Attendance Percent Calculation</h1>
        </div>
        <div className="input-container">
          <NumberInputComponent
            placeholder="Enter the total working hour"
            onChange={Total}
            size="lg"
          />
          <NumberInputComponent
            placeholder="Enter the present hour"
            onChange={Absent}
            size="lg"
          />

          <div>
            <ButtonComponent name="Percent" onClick={percent} />
            <ButtonComponent name="Scenario" onClick={attend} />
          </div>

          <h1>you have: {final}</h1>
        </div>
      </ChakraProvider>
    </div>
  );
}

export default App;
