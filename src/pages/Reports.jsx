import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Reports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const completed = tasks.filter((t) => t.done).length;
    const pending = tasks.filter((t) => !t.done).length;

    setData([
      { name: "Completed", value: completed },
      { name: "Pending", value: pending },
    ]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Reports</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line dataKey="value" stroke="#38bdf8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Reports;