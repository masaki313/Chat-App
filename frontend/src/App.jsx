import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("ユーザー取得エラー:", error);
    }
  };

  const createUser = async () => {
    if (!name.trim()) return;

    try {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name })
      });

      if (!res.ok) {
        throw new Error("ユーザー追加に失敗しました");
      }

      setName("");
      fetchUsers();
    } catch (error) {
      console.error("ユーザー追加エラー:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>FastAPI + React + MySQL サンプル</h1>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="名前を入力"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <button onClick={createUser} style={{ padding: "8px 12px" }}>
          追加
        </button>
      </div>

      <h2>ユーザー一覧</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}: {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}