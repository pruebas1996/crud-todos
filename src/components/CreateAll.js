import { useForm } from 'react-hook-form';

const AllCreate = ({handleCreate}) => {

    const { handleSubmit, register } = useForm()

    const onSubmit = values => {
        // console.log(values)
        handleCreate(values);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit, () => {
                alert('Todos los campos son Requeridos')
            })}
        >
            <div>
                <label htmlFor='task'>Task</label>
                <input
                    type='text'
                    id='task'
                    {...register('task', { required: true })}
                />
            </div>
            <div>
                <label htmlFor='student'>Student</label>
                <input
                    type='text'
                    id='student'
                    {...register('student', { required: true })}
                />
            </div>
            <button>new task</button>
        </form>
    )
}
export default AllCreate;