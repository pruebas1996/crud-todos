import { useEffect, useState } from 'react';
import AllItem from './AllItem';
import CreateAll from './CreateAll';

const AllContainer = ({ create, read, update, deleteAll }) => {
  // Variables de estados
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState(null);
  const [deleteTask, setDeleteTask] = useState(null);
  const [updateTask, setUpadteTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect para cargar la lista
  useEffect(() => {
    read().then(res => {
      setItems(res.data.todos)
    })
  }, [read])

  // useEffect para crear un nueva tarea
  useEffect(() => {
    if (newTask) {
      setIsLoading(true)
      create(newTask).then(
        res => {
          setItems(prev => [res.data, ...prev])
          setIsLoading(false)
        },
        err => {
          console.error(err)
          setIsLoading(false)
        }
      )
    }
  }, [newTask, create])

  // evento del boton create
  const handleCreate = (values) => {
    setNewTask(values)
  }

  // useEffect para eliminar los items
  useEffect(() => {
    if (deleteTask) {
      setIsLoading(true)
      deleteAll(deleteTask).then(
        () => {
          setItems(prev => {
            return prev.filter(value => value.id !== deleteTask)
          })

          setIsLoading(false)
        },
        err => {
          console.error(err)
          setIsLoading(false)
        }
      )
    }
  }, [deleteTask, deleteAll])

  // evento del boton delete
  const handleDelete = id => {
    setDeleteTask(id)
  }

  // useEffect para actualizar una tarea
  useEffect(() => {
    if (updateTask) {
      setIsLoading(true)
      update(updateTask).then(
        res => {
          setItems(prev => prev.map((todos)=>{
            if (todos.id === updateTask.id){
              return res.data
            }
              return todos
          }))
          setIsLoading(false)
        },
        err => {
          console.error(err)
          setIsLoading(false)
        }
      )
    }
  }, [updateTask, update])

  // evento del input checkbox
  const handleUpdate = (values) => {
   setUpadteTask(values)
  }

  // pasamos los datos de la variable de estado items a list
  const list = items.map(item => <AllItem
    key={item.id}
    id={item.id}
    task={item.task}
    Student={item.student}
    isCompleted={item.isCompleted}
    handleDelete={handleDelete}
    handleUpdate = {handleUpdate}
     />);

  return (
    <div>
      {isLoading ? (
        'IS LOADING...'
      ) : (
        <>
          <CreateAll handleCreate={handleCreate} />
          {list}
        </>)}
    </div>
  )

}
export default AllContainer;