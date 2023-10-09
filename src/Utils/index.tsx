export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const generateKey = (pre: string) => {
  return `${pre}_${new Date().getTime() * Math.random()}`
}
