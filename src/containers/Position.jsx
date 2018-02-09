import React from 'react';
import Line from '../components/chart/Line';

const Position = () => {
  let answersArr;
  try {
    const answersStr = localStorage.getItem('answers');
    answersArr = answersStr ? JSON.parse(answersStr) : [];
    if (!answersArr.length) {
      throw new Error('Length is 0');
    }
  } catch (error) {
    console.log('[error] Position error. ', error);
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
      <Line option={{
        xAxis: new Array(81).fill('a').map(e => e / 20 - 2),
        data: [
          {
            name: '政治',
            value: new Array(81).fill('a').map(e => -e * (e - 80)),
          },
          {
            name: '文化',
            value: new Array(81).fill('a').map(e => -e * (e - 81) + 20),
          },
          {
            name: '经济',
            value: new Array(81).fill('a').map(e => -e * (e - 80) + 10),
          },
        ],
      }}
      />
    </div>
  );
};

export default Position;
