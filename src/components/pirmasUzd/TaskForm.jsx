import { useState, useRef } from "react";

function TaskForm({ add }) {
  const taskNameRef = useRef(null);
  const taskDescriptionRef = useRef(null);

  const [taskState, setTaskState] = useState("");
  const [msg, setMsg] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    const taskNameValue = taskNameRef.current.value;
    const taskDescriptionValue = taskDescriptionRef.current.value;

    if (!taskNameValue || !taskDescriptionValue || !taskState) {
      setMsg("Įveskite visas laukus!");
      return;
    }

    const task = {
      id: crypto.randomUUID(),
      name: taskNameValue,
      description: taskDescriptionValue,
      state: taskState,
    };

    console.log(task);

    add(task);

    setMsg("Užduotis sėkmingai pridėta!");
  };

  return (
    <>
      <form onSubmit={addTask}>
        <div>
          <label>Įveskite užduoties pavadinimą:</label>
          <input ref={taskNameRef} type="text" name="taskName" />
        </div>

        <div>
          <label>Įveskite užduoties aprašymą:</label>
          <input ref={taskDescriptionRef} type="text" name="taskDescription" />
        </div>

        <div>
          <label>Įveskite užduoties būseną:</label>
          <label>
            <input
              type="radio"
              name="Taskstate"
              value="Nebaigtas"
              onChange={(e) => setTaskState(e.target.value)}
            />
            Nebaigtas
          </label>

          <label>
            <input
              type="radio"
              name="Taskstate"
              value="Baigtas"
              onChange={(e) => setTaskState(e.target.value)}
            />
            Baigtas
          </label>

          <label>
            <input
              type="radio"
              name="Taskstate"
              value="Vykdomas"
              onChange={(e) => setTaskState(e.target.value)}
            />
            Vykdomas
          </label>

          <label>
            <input
              type="radio"
              name="Taskstate"
              value="Stabdytas"
              onChange={(e) => setTaskState(e.target.value)}
            />
            Stabdytas
          </label>
        </div>

        <button type="submit">Pridėti</button>
      </form>

      {msg && <p>{msg}</p>}
    </>
  );
}

export default TaskForm;
