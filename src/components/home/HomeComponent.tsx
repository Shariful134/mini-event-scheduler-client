import { useState } from "react";
import { Button } from "../ui/button";
import { FormComponent } from "../form/Form";
import EventsComponent from "../events/Events";

const HomeComponent = () => {
  const [createEvents, setCreateEvents] = useState<boolean>(false);

  return (
    <div>
      <div>
        <div className="text-right">
          <Button
            onClick={() => setCreateEvents(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg shadow"
          >
            + Create Event
          </Button>
        </div>
        {createEvents ? (
          <FormComponent onClose={() => setCreateEvents(false)}></FormComponent>
        ) : (
          <EventsComponent></EventsComponent>
        )}
      </div>
    </div>
  );
};

export default HomeComponent;
