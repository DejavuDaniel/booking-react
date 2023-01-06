import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getHours from 'date-fns/getHours';
import getDate from 'date-fns/getDate';

import "react-datepicker/dist/react-datepicker.css";
import './CalendarForm.css'


const CalendarForm = ({ user, bookedDates }) => {
    const [startDate, setStartDate] = useState();
    let bookedHour = getHours(startDate)
    let bookedDate = getDate(startDate)
    console.log(bookedDate); //data
    console.log(bookedHour); //valanda!

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day !== 1 && day !== 2 && day !== 3 && day !== 4
    }


    const todayDay = new Date();
    const startDay = new Date();
    todayDay.setDate(todayDay.getDate() + 1)
    const maxDay = new Date();
    maxDay.setDate(maxDay.getDate() + 60)

    return (
        <div className='calendarForm' style={{ paddingTop: "200px"}}>
            <h2 style={{fontSize: "35px"}}>Select Time</h2>
            <div className='centerDate'>
                <DatePicker
                    selected={startDate}
                    highlightDates={startDay}
                    minDate={todayDay}
                    maxDate={maxDay}
                    onChange={(date) => setStartDate(date)}
                    filterDate={isWeekday}
                    inline
                    showTimeSelect
                    timeFormat="HH:mm"
                    includeTimes={[
                        setHours(setMinutes(new Date(), 0), 12),
                        setHours(setMinutes(new Date(), 0), 15),
                        setHours(setMinutes(new Date(), 0), 18),
                        setHours(setMinutes(new Date(), 0), 21),
                      ]}
                    dateFormat="MMMM d, yyyy h:mm aa"

                />
            </div>
            <div style={{ paddingTop: "70px", textAlign:"center" }}>
                <button  className="submitBtn" style={{ padding: "10px 100px", color: "white", borderRadius: "10px" }}>Book now</button>
            </div>
        </div>
    )
}

export default CalendarForm;