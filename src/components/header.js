import React, { Component } from 'react';

export default function header(props) {
   return (
      <div className="header-wrapper">
         <button onClick={() => {props.handleMonthChange('prev')}}>&lt; Previous</button>
         <h2>{ props.month }</h2>
         <button onClick={() => {props.handleMonthChange('next')}}>Next &gt;</button>
      </div>
   );
}