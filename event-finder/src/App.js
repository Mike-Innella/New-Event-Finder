import React, { useState } from 'react';
import SearchBar from './SearchBar';
import EventList from './EventList';

function App() {
  const [events, setEvents] = useState([
    { name: 'Concert', date: '2025-05-12', location: 'New York' },
    { name: 'Festival', date: '2025-06-18', location: 'Los Angeles' },
    { name: 'Workshop', date: '2025-04-22', location: 'Chicago' },
  ]);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleSearch = (query) => {
    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="App">
      <h1>Event Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <EventList events={filteredEvents} />
    </div>
  );
}

export default App;
