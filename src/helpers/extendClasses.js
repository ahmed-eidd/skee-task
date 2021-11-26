export const extendClasses = (oldClass, ...newClasses) => {
  return [oldClass, ...newClasses].join(' ');
};
