import { useEffect, useState } from "react";
import { Button } from "../ui/button";
type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  notes?: string;
  category: string;
  archived: boolean;
};
const HomeComponent = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/events/${id}`, {
      method: "DELETE",
    });
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleArchive = async (id: string) => {
    await fetch(`http://localhost:5000/events/${id}`, {
      method: "PUT",
    });
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, archived: true } : event
      )
    );
  };
  return (
    <div>
      <div className="space-y-6">
        <div className="text-right">
          <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg shadow">
            + Create Event
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {events.length === 0 ? (
            <p className="text-center col-span-full">No events found.</p>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold">{event.title}</h2>
                <p className="text-sm text-gray-600">
                  {event.date} at {event.time}
                </p>
                {event.notes && <p className="mt-2 text-sm">{event.notes}</p>}
                <p className="mt-2 text-xs">
                  <span className="font-semibold">Category:</span>{" "}
                  <span
                    className={`inline-block px-2 py-1 rounded text-white text-xs ${
                      event.category === "Work"
                        ? "bg-blue-500"
                        : event.category === "Personal"
                        ? "bg-pink-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {event.category}
                  </span>
                </p>
                <div className="mt-4 flex gap-2">
                  {!event.archived && (
                    <Button
                      onClick={() => handleArchive(event.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 text-sm"
                    >
                      Archive
                    </Button>
                  )}
                  <Button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 text-sm"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
