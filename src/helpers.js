import moment from 'moment'

export const secToSecMinHr = secondes => {
  const duration = moment.duration(secondes, 'seconds')
  const sec = duration.seconds()
  const min = duration.minutes()
  const hr = duration.hours()
  return {
    sec: `${sec < 10 ? `0${sec}` : sec}`,
    min: `${min < 10 ? `0${min}` : min}`,
    hr: `${hr < 10 ? `0${hr}` : hr}`
  }
}

export const converter = (h1, m1, s1, h2, m2, s2) => {
  return (h1 - h2) * 3600 + (m1 - m2) * 60 + (s1 - s2)
}

export const formater = ({ hr, min, sec }) => hr + ':' + min + ':' + sec

export const calculeCost = secondes => {
  return ((secondes / 3600) * 20).toFixed(2)
}
