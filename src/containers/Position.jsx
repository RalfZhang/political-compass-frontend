import React from 'react';

const Position = () => {
  let answersArr;
  try {
    const answersStr = localStorage.getItem('answers');
    answersArr = answersStr ? JSON.parse(answersStr) : [];
    if (!answersArr.length) {
      throw new Error('Length is 0');
    }
  } catch (error) {
    console.log('[error] Position error. ',error);
    return (
      <div>Data Error</div>
    );
  }
  const getPositionByReg = (reg) => {
    const arr = answersArr.filter(e => reg.test(e.id)).map(e => e.value);
    return arr.reduce((a, c) => a + c) / arr.length;
  };
  return (
    <div>
      <div>政治：{getPositionByReg(/^q1\d\d$/)}</div>
      <div>文化：{getPositionByReg(/^q2\d\d$/)}</div>
      <div>经济：{getPositionByReg(/^q3\d\d$/)}</div>
    </div>
  );
};

export default Position;
