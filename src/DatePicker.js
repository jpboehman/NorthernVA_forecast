import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import './styles/DatePicker.css';

export const DatePicker = ({ title, onChange, value }) => {
	return (
		<div className="inputWrapper">
			<p>{title}</p>
			<DateTimePicker onChange={onChange} value={value} dateFormat="MM/DD/YYYY"/>
		</div>
	);
};

export default DatePicker;
