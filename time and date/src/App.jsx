import { useState } from "react";
import { CiClock1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { format } from "date-fns";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateIconClick = () => {
    setShowDatePicker(!showDatePicker);
    setShowTimePicker(false); // Hide time picker when date picker is shown
  };

  const handleTimeIconClick = () => {
    setShowTimePicker(!showTimePicker);
    setShowDatePicker(false); // Hide date picker when time picker is shown
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  const handleClockChange = (time) => {
    setSelectedTime(time);
    setShowTimePicker(false);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex items-center justify-center">
        <div className="p-5 text-center">
          <CiClock1
            size={50}
            onClick={handleTimeIconClick}
            style={{ cursor: "pointer" }}
          />
          {showTimePicker && (
            <div className="mt-4 relative">
              <Clock
                value={selectedTime}
                onChange={handleClockChange}
                className="border p-2 rounded"
              />
              <p className="mt-2">
                Selected Time: {format(selectedTime, "HH:mm:ss")}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="p-5 text-center">
          <SlCalender
            size={50}
            onClick={handleDateIconClick}
            style={{ cursor: "pointer" }}
          />
          {showDatePicker && (
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()} // Prevents selecting backward dates
              className="mt-4 border p-2 rounded"
              inline
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
