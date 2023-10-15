import { useState, useEffect } from 'react';

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Function to update the date and time every second
    const updateDateTime = () => {
      setDateTime(new Date());
    };

    // Update the date and time initially
    updateDateTime();

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedDateTime = dateTime.toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok', // Set the timezone to GMT+7
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div>
      <p><b>DATETIME: {formattedDateTime} +07</b></p>
    </div>
  );
};

export default Clock;

