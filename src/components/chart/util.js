export const pipeProps = (d, axis) => d.map(e => ({
  key: e.name,
  values: e.values.map((v, i) => ({
    position: axis[i],
    value: v,
  })),
}));

export const getTextWidth = (text, fontSize = 14, fontFace) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `${fontSize}px ${fontFace}`;
  return context.measureText(text).width;
};
