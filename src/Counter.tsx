import React, {FC} from "react";
import './Counter.css';

interface CounterProps {
  label?: string;
  count?: number;
  onCounterIncrease?: (isShift: boolean) => void;
}

const Counter: FC<CounterProps> = ({label = 'Count', count = 0, onCounterIncrease = () => {}}) => {
  const handleClick = (event?: React.MouseEvent<HTMLElement>) => {
    onCounterIncrease(!!event && event.shiftKey);
  };
  return (
    <div className="counter" onClick={handleClick}>
      <label>{label}</label>
      <span>{count}</span>
    </div>
  );
};

export default Counter;
