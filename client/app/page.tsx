"use client";

import {useState, useEffect} from "react";
import {io} from "socket.io-client";
export default function Home() {
  // scoket code
  const socket = io("http://localhost:3000");

  function connectToSocket() {
    socket.on("connection", (socket) => {
      console.log("socket connected");
    });
  }
  useEffect(() => {
    connectToSocket();
  }, []);

  function sendScores(){
    socket.emit('score',formData)
  }
  // socket code

  const [formData, setFormData] = useState<FormData>({
    name: "",
    score: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   sendScores();
    setFormData({name: "", score: 0});
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>WEB SOCKET DEMO APP</h1>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Enter score"
              value={formData.score}
              onChange={(e) =>
                setFormData({...formData, score: Number(e.target.value)})
              }
              className="p-2 border rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Submit Score
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
interface FormData {
  name: string;
  score: number;
}
