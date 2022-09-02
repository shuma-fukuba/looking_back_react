const home = (path?: string) => {
  const prefix = '/home'
  return `${prefix}/${path}`
}

const lookingBack = (path?: string) => {
  const prefix = '/looking_back'
  return `${prefix}/${path}`
}

const curriculums = (path?: string) => {
  const prefix = '/curriculums'
  return `${prefix}/${path}`
}

const learningTime = (path?: string) => {
  const prefix = '/learning_times'
  return `${prefix}/${path}`
}

const user = (path?: string) => {
  const prefix = '/users'
  return `${prefix}/${path}`
}

export default {
  root: '/',
  home: home(),
  lookingBack: {}
}
