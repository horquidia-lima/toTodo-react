import { useState } from "react";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";

import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
    task: Task 
}

export default function TaskItem({task}: TaskItemProps){
    const [isEditing, setIsEditing] = useState(
        task?.state === TaskState.Creating
    )

    const [taskTitle, setTaskTitle] = useState('')

    function handleEditTask(){
        setIsEditing(true)
    }

    function handleExitEditTask(){
        setIsEditing(false)
    }

    function handleTaskTitle(e: React.ChangeEvent<HTMLInputElement>){
        setTaskTitle(e.target.value || '')
    }

    function handleSaveTask(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        console.log({id: task.id, title: taskTitle})

        setIsEditing(false)
    }

    return(
            <Card size="md">
                {!isEditing ? (
                    <div className="flex items-center gap-4">
                        <InputCheckbox value={task?.concluded?.toString()} checked={task?.concluded}/>
                        <Text className={cx("flex-1", {
                            'line-through' : task?.concluded
                        })}>
                            {task?.title}
                        </Text>
                        <div className="flex gap-1">
                            <ButtonIcon type="button" icon={TrashIcon} variant="tertiary"/>
                            <ButtonIcon type="button" icon={PencilIcon} variant="tertiary" onClick={handleEditTask}/>
                        </div>
                    </div>
                ):(
                    <form onSubmit={handleSaveTask} className="flex items-center gap-4">
                        <InputText 
                            className="flex-1" 
                            onChange={handleTaskTitle}
                            required
                            autoFocus
                        />
                        <div className="flex gap-1">
                            <ButtonIcon type="button" icon={XIcon} variant="secondary" onClick={handleExitEditTask}/>
                            <ButtonIcon type="submit" icon={CheckIcon} variant="primary"/>
                        </div>
                    </form>
                )}
                
            </Card>
    )
}