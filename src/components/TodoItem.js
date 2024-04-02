import { useDispatch } from "react-redux";
import { removeTodo, markCompleted, markIncomplete } from "../redux/actions";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-item">
      <div className="name">
        <span className="num">{index + 1}.</span>
        <span
          className={`mr-4 ${
            todo.completed ? "complete" : "incomplete"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="edit-icons">
        <i>
          <DeleteIcon onClick={() => dispatch(removeTodo(index))} />
        </i>
        {!todo.completed && (
          <i>
            <CheckIcon onClick={() => dispatch(markCompleted(index))} />
          </i>
        )}
        {todo.completed && (
          <i>
            <CloseIcon onClick={() => dispatch(markIncomplete(index))} />
          </i>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
