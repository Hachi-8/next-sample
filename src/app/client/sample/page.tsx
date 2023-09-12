"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function sample() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  console.log(users);
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
