const calculateSpeed = (distance, time) => {
  if (time === 0) {
    return 0;
  }
  return distance / time;
};

export default calculateSpeed;
