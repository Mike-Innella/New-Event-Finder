import React from 'react';

function EventList({ events }) {
  if (events.length === 0) {
    return <p>No events found</p>;
  }

  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          <h3>{event.name}</h3>
          <p>{event.date}</p>
          <p>{event.location}</p>
        </li>
      ))}
    </ul>
  );
}

export default EventList;
