import React, { useState, useEffect } from 'react';

const Testing = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        apiKey: 'AIzaSyBNpz65ogerO8WhpEGoAKOkikY9OyBudec',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      }).then(() => {
        console.log('Google Calendar API client initialized');
        setApiLoaded(true);
      }).catch((error) => {
        console.error('Error initializing Google Calendar API client:', error);
      });
    });
  }, []);

  const addEventToCalendar = () => {
    const event = {
      summary: description,
      start: {
        dateTime: new Date(date).toISOString(),
      },
      end: {
        dateTime: new Date(date).toISOString(),
      },
    };

    const request = window.gapi.client.calendar.events.insert({
      calendarId: 'primary', // or any other calendar id you want to add the event to
      resource: event,
    });

    request.execute((event) => {
      console.log('Event added:', event);
    });
  };

  if (!apiLoaded) {
    return <div>Loading Google Calendar API...</div>;
  }

  return (
    <div>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addEventToCalendar}>Add Event</button>
    </div>
  );
};

export default Testing;
