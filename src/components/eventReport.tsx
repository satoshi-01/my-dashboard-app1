import React from "react";

const EventReport = () => {
  const events = [
    { title: "Event 1", description: "This is the description of Event 1." },
    { title: "Event 2", description: "This is the description of Event 2." },
    { title: "Event 3", description: "This is the description of Event 3." },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Event Report</h1>
      {events.map((event, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-lg font-bold">{event.title}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventReport;
