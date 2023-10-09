export const uuid = (): string =>
  new Date().getTime().toString(36) + Math.random().toString(36).slice(2)

let stepCount = 1

export const randomLabel = (): string => {
  stepCount = stepCount + 1
  return `Step ${stepCount}`
}
