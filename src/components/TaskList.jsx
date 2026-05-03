import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // LOAD (only once)
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // SAVE (whenever tasks change)
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ADD TASK
  const addTask = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      time: 0,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  return (
    <div>
      <h2>📋 Tasks</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      {/* SHOW TASKS */}
      {tasks.map((t) => (
        <div key={t.id} style={{ margin: "10px" }}>
          <b>{t.text}</b>

          <span style={{ marginLeft: "20px" }}>
            ⏱ {t.time}s
          </span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;