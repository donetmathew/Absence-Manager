import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export const CustomDatePicker: React.FC<{
    minDate: string,maxDate:string,selectedDate:Date,onDateChange:(e:any)=> void
}> = ({ minDate,maxDate,selectedDate, onDateChange}) =>  {
    
  return (
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        placeholderText={'mm/dd/yyyy'}
        minDate={new Date(minDate)}
        maxDate={new Date(maxDate)}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        showYearDropdown
        scrollableYearDropdown
      />
  )
}

export default CustomDatePicker

