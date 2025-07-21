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
const EventsComponent = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const getData = async () => {
    const res = await fetch(
      "https://event-scheduler-coral.vercel.app/api/v1/events/get"
    );
    const response = await res.json();
    setEvents(response?.Data);
    setFilteredEvents(response?.Data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await fetch(
      `https://event-scheduler-coral.vercel.app/api/v1/events/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await res.json();
    if (response?.success) {
      getData();
    }
    console.log("Delete response:", response);
  };

  const handleArchive = async (id: string) => {
    console.log("arcived:", id);
    await fetch(
      `https://event-scheduler-coral.vercel.app/api/v1/events/archived/${id}`,
      {
        method: "PUT",
      }
    );
    getData();
  };

  const handleFilterChange = (category: string) => {
    setFilter(category);
    if (category === "All") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events?.filter((event) => event.category === category));
    }
  };
  return (
    <div className="py-10">
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8  gap-4 mb-8 justify-center">
        {["All", "Work", "Personal", "Other"].map((cat) => (
          <Button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`px-4 py-2 text-sm  ${
              filter === cat
                ? "bg-blue-600 text-white hover:bg-gray-300 hover:text-black"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-black"
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>
      {/* Event Cards */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredEvents?.length === 0 ? (
          <p className="text-center col-span-full">No events found.</p>
        ) : (
          filteredEvents?.map((event) => (
            <div
              key={event?.id}
              className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{event.title}</h2>
              <p className="text-sm text-gray-600">
                {event?.date} at {event?.time}
              </p>
              {event?.notes && <p className="mt-2 text-sm">{event?.notes}</p>}
              <p className="mt-2 text-xs">
                <span className="font-semibold">Category:</span>{" "}
                <span
                  className={`inline-block px-2 py-1 rounded text-white text-xs ${
                    event?.category === "Work"
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
                    onClick={() => handleArchive(event?.id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 text-sm"
                  >
                    Archive
                  </Button>
                )}
                <Button
                  onClick={() => handleDelete(event?.id)}
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
  );
};

export default EventsComponent;
{
  /* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {events?.length === 0 ? (
        <p className="text-center col-span-full ">No events found.</p>
      ) : (
        events?.map((event) => (
          <div
            key={event?.id}
            className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p className="text-sm text-gray-600">
              {event?.date} at {event?.time}
            </p>
            {event?.notes && <p className="mt-2 text-sm">{event?.notes}</p>}
            <p className="mt-2 text-xs">
              <span className="font-semibold">Category:</span>{" "}
              <span
                className={`inline-block px-2 py-1 rounded text-white text-xs ${
                  event?.category === "Work"
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
                  onClick={() => handleArchive(event?.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 text-sm"
                >
                  Archive
                </Button>
              )}
              <Button
                onClick={() => handleDelete(event?.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 text-sm"
              >
                Delete
              </Button>
            </div>
          </div>
        ))
      )}
    </div> */
}
