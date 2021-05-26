import './styles.css';
import { useState } from 'react';

const AllItem = ({ task, Student, id, handleDelete, isCompleted, handleUpdate }) => {

    const [checkValue, setCheckValue] = useState(isCompleted);

    return (
        <>
            <form >
                <h3>Task: {task}</h3>
                <h3>Student: {Student} </h3>
                <div>
                    <label htmlFor='isCompleted'>Completed:</label>
                    <input type='checkbox' id='isCompleted' checked={checkValue} onChange={e => {
                        setCheckValue(e.target.checked)
                        handleUpdate({
                            id,
                            Task: task,
                            Student: Student,
                            isCompleted: e.target.checked
                        })
                    }} />

                </div>

            </form>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </>
    )

}
export default AllItem;