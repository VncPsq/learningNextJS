import { TableCell, TableRow } from "flowbite-react";

export default function Todo({ title, description, isCompleted }) {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        1
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{isCompleted ? "Completed" : "Pending"}</TableCell>
      <TableCell className="flex gap-1 justify-evenly">
        <button className="btn-add">Done</button>
        <button className="btn-remove">Delete</button>
      </TableCell>
    </TableRow>
  );
}
