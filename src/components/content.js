import React from 'react';
import moment from 'moment';

import DayCell from './day-cell';

export default function ContentWrapper(props) {
   const currentCalendarDate = moment(props.date.format('YYYY-MM-DD'));
   const numberOfDaysInMonth = currentCalendarDate.daysInMonth();
   const dayOfWeekOfFirstOfMonth = moment(currentCalendarDate.date(1).day());   // Sun = 0, Sat = 6
   const numberOfDaysInPreviousMonth = currentCalendarDate.subtract(1, 'month').daysInMonth();
   
   let dayBoxes = [];
   let currentCol = 0;

   for (let prevDays = 0; prevDays < dayOfWeekOfFirstOfMonth; prevDays++) {
      dayBoxes.push(<DayCell dayOfMonth={ numberOfDaysInPreviousMonth - dayOfWeekOfFirstOfMonth + (prevDays + 1) } isOtherMonth="true"/>);
      currentCol++;
   }

   for (let day = 1; day <= numberOfDaysInMonth; day++) {
      dayBoxes.push(<DayCell dayOfMonth={ day }/>);
      currentCol = (currentCol + 1) % 7;
   }

   let newDay = 1;
   while (currentCol <= 6) {
      dayBoxes.push(<DayCell dayOfMonth={ newDay } isOtherMonth="true"/>);
      newDay++;
      currentCol++;
   }

   return (
      <div className="content-wrapper">
         <div className="day-header">Sun</div>
         <div className="day-header">Mon</div>
         <div className="day-header">Tue</div>
         <div className="day-header">Wed</div>
         <div className="day-header">Thu</div>
         <div className="day-header">Fri</div>
         <div className="day-header">Sat</div>
         { dayBoxes.map(value => {
            return value;
         })}
      </div>
   )
}