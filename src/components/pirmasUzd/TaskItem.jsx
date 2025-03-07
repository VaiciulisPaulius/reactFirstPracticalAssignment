import { useState } from "react";

function TaskItem({ task, remove, changeState }) {
  const [state, setState] = useState(task.state);
  const [msg, setMsg] = useState("");

  const changeTaskState = () => {
    const prevState = task.state;
    task.state = state;
    changeState(task);
    setMsg(`Task state successfully changed from ${prevState} to ${task.state}`);
  };

  return (
    <>
      <div>
        <h2>{task.name}</h2>
        <p>{task.description}</p>

        <label>
          <input
            type="radio"
            id="unfinishedState"
            name={`Taskstate-${task.id}`}
            value="Nebaigtas"
            checked={state === "Nebaigtas"}
            onChange={(e) => setState(e.target.value)}
          />
          Nebaigtas
        </label>

        <label>
          <input
            type="radio"
            id="finishedState"
            name={`Taskstate-${task.id}`}
            value="Baigtas"
            checked={state === "Baigtas"}
            onChange={(e) => setState(e.target.value)}
          />
          Baigtas
        </label>

        <label>
          <input
            type="radio"
            id="doingState"
            name={`Taskstate-${task.id}`}
            value="Vykdomas"
            checked={state === "Vykdomas"}
            onChange={(e) => setState(e.target.value)}
          />
          Vykdomas
        </label>

        <label>
          <input
            type="radio"
            id="onHoldState"
            name={`Taskstate-${task.id}`}
            value="Stabdytas"
            checked={state === "Stabdytas"}
            onChange={(e) => setState(e.target.value)}
          />
          Stabdytas
        </label>

        <button onClick={changeTaskState}>Pakeisti būseną</button>
        <button onClick={() => remove(task)}>Trinti</button>

        {msg && <p>{msg}</p>}
      </div>
    </>
  );
}

export default TaskItem;
