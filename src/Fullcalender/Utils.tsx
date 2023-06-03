import { EventInput } from '@fullcalendar/core'

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

console.log("from utils tsx",todayStr)



export const  createEventId = () =>  {
  return String(eventGuid++)
}

export const INITIAL_EVENTS: EventInput[] = [
    {
      id: createEventId(),
      title: 'All-day event 2',
      start: todayStr
    },
    {
      id: createEventId(),
      title: 'Timed event',
      start: todayStr + 'T15:00:00',
      end: todayStr + 'T18:00:00',
      color: '#378006',
      editable: false
    }
  ]




 // npm install --save @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid