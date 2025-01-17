import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import Todo from "./Todo";

export default function TableTodo({ todos, deleteTodo, updateTodo }) {
  return (
    <div className="overflow-x-auto w-10/12">
      <Table hoverable className="text-center">
        <TableHead>
          <TableHeadCell>Id</TableHeadCell>
          <TableHeadCell>Title</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>Action</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y text-center">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              isCompleted={todo.isCompleted}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
