import { useState } from "react";
import { Formlar } from "./form";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit); // güncelleye tıkladığımızda true oluyor
    //başlangıçta üstte false değeri verdik
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false); // güncelleye tıkladığımızda true oluyor
    //başlangıçta üstte false değeri verdik
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  

  return (
    <div className="task-show">
      {showEdit ? (
        <Formlar task={task} taskformUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-show-sil" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-show-güncelle" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
