import { useState, useEffect } from 'react';
import { Button } from '../../../../AppStyles';

const KitButton = (props) => {
  const [endTime, setEndTime] = useState();
  const [timer, setTimer] = useState();

  useEffect(() => {
    if (props.time >= 0) {
      setEndTime(Math.floor(Date.now() / 1000) + props.time);
      setTimer(props.time);
    }
    // eslint-disable-next-line
  }, [props.time]);

  useEffect(() => {
    let timerId;
    if (timer >= 0) {
      timerId = setTimeout(() => setTimer(endTime - Math.floor(Date.now() / 1000)), 1000);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
    // eslint-disable-next-line
  });

  const formatTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = (time % 3600) % 60;

    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  };

  return (
    <Button disabled={timer >= 0} onClick={() => props.obtainKit(props.kitId)}>
      {timer >= 0 ? formatTime(timer) : 'Получить'}
    </Button>
  );
};

export default KitButton;
