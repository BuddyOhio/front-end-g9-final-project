import { useContext, useState } from "react";
import { CustumnContext } from "./Context.jsx";

const ActivityCreate = () => {
  const { createActivity } = useContext(CustumnContext);

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");

  const handleCreate = async (event) => {
    event.preventDefault();
    await createActivity(name, status, date, time, duration);
  };
  return (
    <>
      <div>
        <form>
          <input
            placeholder="name"
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            placeholder="status"
            type="text"
            value={status}
            onChange={(ev) => setStatus(ev.target.value)}
          />
          <input
            placeholder="date"
            type="text"
            value={date}
            onChange={(ev) => setDate(ev.target.value)}
          />
          <input
            placeholder="time"
            type="text"
            value={time}
            onChange={(ev) => setTime(ev.target.value)}
          />
          <input
            placeholder="duration"
            type="text"
            value={duration}
            onChange={(ev) => setDuration(ev.target.value)}
          />
          <button onClick={handleCreate}>submit</button>
        </form>
      </div>
    </>
  );
};

export default ActivityCreate;
