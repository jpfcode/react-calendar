import React from 'react';

export default function DayCell(props) {
   return (
      <div className="day-cell">
         <div className={`date ${ props.isOtherMonth ? 'other-month' : '' }`}>
            { props.dayOfMonth }
         </div>
      </div>
   );
}