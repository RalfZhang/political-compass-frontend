export const pipeProps = (d,axis)=> d.map(e=>({
  key: e.name,
  values: e.values.map((v,i)=>({
    position: axis[i],
    value: v
  }))
}))