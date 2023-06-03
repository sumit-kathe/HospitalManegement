import { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '../../../Fullcalender/Utils'
import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventContentArg,
    formatDate,
  } from '@fullcalendar/core'
import { useDispatch } from 'react-redux'
import { SetEventFun } from '../../../mainstore/user/setEvent'

const SetAppointment =()=>{
    const renderEventContent = (eventContent: EventContentArg) => {
        return (
          <>
          {/* <h1>Form for Event </h1> */}
            <b>{eventContent.timeText}</b>
            <i>{eventContent.event.title}</i>
          </>
        )
      }
      const handleDateSelect = (selectInfo: DateSelectArg) => {
        let title = prompt('Please enter a new title for your event  hkjvn    thhhhhhhh')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
          calendarApi.addEvent({
            id: createEventId(),
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
        }
    // return(<>
    //     <h1> heyyy Doctor</h1>
    
    // </>)

      }
    const handleEventClick = (clickInfo: EventClickArg) => {
        // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        //   clickInfo.event.remove()
        // }
      }
    
      const handleEvents = (events: EventApi[]) => {
        // this.setState({
        //   currentEvents: events
        // })
      }
      //////////////////FORM STATE AND DATA///////////////////////////
      
      const dispatch: any = useDispatch();
      const [name, setName] = useState('');
      const [startDate, setstartDate] = useState('');
      const [endDate, setendDate] = useState('');
      const [editable, seteditable] = useState("");
      const [color, setcolor] = useState("");


      const handleSubmit=(e:any)=>{

        e.preventDefault();

        console.log("name of the event",name)
      console.log("Start time",startDate)
      console.log("End time",endDate)
      console.log("editable",editable)
      console.log("color",color)

      dispatch(SetEventFun({name,startDate,endDate,editable,color}))
      }




    return(


        <>
        <div>
        <form className="w-1/3 p-6 ml-7 mt-3 mb-6 bg-white  shadow-lg  rounded-md  border-2 border-solid border-sky-500 " onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Set Your Appointment from the below form</h1>
        <div className="mb-3">
          <label htmlFor="name" className="block mb-1">
            Enter Event name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Start" className="block mb-1">
           Start- date & time
          </label>
          <input
            type="datetime-local"
            id="name"
            className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
            value={startDate}
            onChange={(e)=>{setstartDate(e.target.value)}}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="End" className="block mb-1">
           End-date & time
          </label>
          <input
            type="datetime-local"
            id="name"
            className="w-full border border-gray-300 rounded py-1 px-2 focus:outline-none focus:border-blue-500"
            value={endDate}
            onChange={(e)=>{setendDate(e.target.value)}}
            required
          />
        </div>

        <div className="mb-3">
        <label htmlFor="editable" className="block mb-1">
        Editable-Yes
        NonEditable-No
          </label>
        <input
            type="radio"
            name="gender"
            value="true"
          onChange={(e) => seteditable(e.target.value)}
          />
          Yes
          <input type="radio" name="gender" value="false"  onChange={(e) => seteditable(e.target.value)}  />
          NO
         
          
        </div>
        <div className="mb-3">
          <label>Select Color</label>
          <select className=""  onChange={(e) => setcolor(e.target.value)} required>
          <option>Green</option>
          <option>Red</option>
          <option>Pink</option>
             
             </select>
        </div>
          <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Event 
        </button>

        </form>
        
        
        
        </div>

        <FullCalendar
        plugins={[ dayGridPlugin,timeGridPlugin, interactionPlugin ]}
        headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        // weekends={this.state.weekendsVisible}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents}
      />
        
        </>
    )
}

export default SetAppointment;