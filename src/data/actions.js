export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });

export const setProgramDescription = (text) => ({
  type: 'SETPROGRAMDESCRIPTION',
  text,
});

export const setAttribute = (text, value) => ({
  type: 'SETATTRIBUTE',
  text,
  value,
});

export const setSkill = (text, value) => ({
  type: 'SETSKILL',
  text,
  value,
});

export const setDeckingDeviceStat = (text, value) => ({
  type: 'SETDECKINGDEVICESTAT',
  text,
  value,
});

export const load = (value) => ({
  type: 'LOAD',
  value,
});
