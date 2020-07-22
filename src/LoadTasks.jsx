import React from 'react';

const LoadTasks = ({tasks, deleteTask}) => {
    const taskList = tasks.length ? (tasks.map((task) => {
        return(
            <div key={task.id}  onClick={() => deleteTask(task.id)}>
                  <div className="card-panel">
                    <p className="blue-text text-darken-2">{task.content}</p>
                </div>
            </div>
        )
    })) : <h4 className="center">You have no tasks left yay</h4>
    return (
        <div>
            {taskList}
        </div>
    );
}

export default LoadTasks;
