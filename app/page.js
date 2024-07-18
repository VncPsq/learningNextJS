"use client";
import axios from "axios";
import TableTodo from "../components/TableTodo";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios("api/todos");
      setTodoData(response.data.todos);
    } catch (error) {
      toast.error("Failed to fetch todo");
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete("api/todos", {
        data: { id },
      });
      toast.success(response.data.msg);
      fetchTodos();
    } catch (error) {
      toast.error("Failed to delete todo");
    }
  };

  const updateTodo = async (id, isCompleted) => {
    try {
      const response = await axios.put("api/todos", { id, isCompleted });
      toast.success(response.data.msg);
      fetchTodos();
    } catch (error) {
      toast.error("Failed to update todo");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Typing info Todo
  const onChangehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.info(formData);
  };

  // Submit todo
  const onSubmithandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/todos", formData);
      setFormData({ title: "", description: "" });
      await fetchTodos();
      toast.success(response.data.msg);
    } catch (error) {
      toast.error("Oups something went wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <h1>What do we do today ? ⭐</h1>
      <form
        onSubmit={onSubmithandler}
        className="flex items-start flex-col gap-2 w-10/12 mt-8 px-2"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={onChangehandler}
          placeholder="Enter a title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={onChangehandler}
          placeholder="Enter a description"
          className="px-3 py-2 border-2 w-full"
        />
        <button type="submit" className="btn-primary">
          Add Todo
        </button>
      </form>
      <TableTodo
        todos={todoData}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}
