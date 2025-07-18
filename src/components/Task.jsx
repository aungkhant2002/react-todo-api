import React from 'react'
import Swal from 'sweetalert2';

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const handleRemoveTask = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "border bg-indigo-900 text-white px-2 py-1 rounded-lg ml-2",
        cancelButton: "border bg-pink-900 text-white px-2 py-1 rounded-lg"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        removeTask(id);

        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success"
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your task is safe :)",
          icon: "error"
        });
      }
    });

  }
  const handleOnChange = () => {
    doneTask(id);
  }
  return (
    <div className="bg-white/10 backdrop-blur-md shadow-lg flex justify-between items-center border border-white/20 p-3 rounded-xl mb-3 last:mb-0">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isDone}
          onChange={handleOnChange}
          className="size-5 accent-cyan-400 bg-white/10 border border-white/30 rounded-md shadow-sm hover:scale-105 transition-transform duration-150"
        />
        <p className={`text-white ${isDone ? "line-through opacity-60 scale-95 duration-200" : ""}`}>
          {task}
        </p>
      </div>
      <button
        onClick={handleRemoveTask}
        className="flex items-center gap-1 bg-red-500/20 text-red-300 border border-red-300/30 rounded-lg text-sm px-3 py-1 hover:bg-red-500/30 hover:text-red-100 transition-all duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        Delete
      </button>
    </div>

  )
}

export default Task