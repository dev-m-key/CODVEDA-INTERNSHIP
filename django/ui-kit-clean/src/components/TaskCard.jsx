import React from "react";
import Button from "./Button";

const TaskCard = ({ task, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 flex justify-between items-center">
      <span>{task}</span>
      <div className="flex gap-2">
        {onEdit && (
          <Button
            onClick={onEdit}
            className="bg-yellow-500 hover:bg-yellow-600 text-sm px-3 py-1"
          >
            Edit
          </Button>
        )}
        {onDelete && (
          <Button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-600 text-sm px-3 py-1"
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
