import { TableCell, TableRow } from "flowbite-react";

export default function Todo({
  id,
  title,
  description,
  isCompleted,
  deleteTodo,
  updateTodo,
}) {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {id}
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{isCompleted ? "Completed" : "Pending"}</TableCell>
      <TableCell className="flex gap-1 justify-evenly">
        <button className="btn-add" onClick={() => updateTodo(id, isCompleted)}>
          {isCompleted ? "Undo" : "Done"}
        </button>
        <button className="btn-remove" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </TableCell>
    </TableRow>
  );
}
