import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pin, archive, unpin } from "../../Redux/Slice";
import ButtonComponent from "@bit/usamatahir.tasks.button-component";
import TaskList from "@bit/usamatahir.tasks.task-list";
import NewTaskScreen from "../NewTaskPage/NewTaskPage";

interface task {
  id: string;
  title: string;
  state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";
}

function TaskListPage() {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => state);
  console.log(reducer);

  function onPinTask(id: string) {
    dispatch(pin({ id: id }));
  }

  function onArchiveTask(id: string) {
    dispatch(archive({ id: id }));
  }

  function onUnpinTask(id: string) {
    dispatch(unpin({ id: id }));
  }

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {open && <NewTaskScreen open={open} setOpen={setOpen}></NewTaskScreen>}
      <div>
        <h1 className="mainHeading">My Taskbox</h1>
      </div>

      <div className="addANewTaskButtonContainer">
        <ButtonComponent
          onClick={() => {
            setOpen(true);
          }}
          color="primary"
          variant="contained"
        >
          Add a Task
        </ButtonComponent>
      </div>
      <TaskList
        tasks={reducer as task[]}
        onPinTask={onPinTask}
        onArchiveTask={onArchiveTask}
        onUnpinTask={onUnpinTask}
      ></TaskList>
    </div>
  );
}
export default TaskListPage;
