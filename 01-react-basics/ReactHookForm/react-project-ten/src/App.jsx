import './App.css'
import { useForm} from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting},
  } = useForm()

  function onSubmit(data){
    console.log("submitting the form", data);
  }
  

  return (
   <form onSubmit={handleSubmit(onSubmit)}  >
     <div>
      <label>First Name:</label>
      <input className={errors.firstName ? 'input-error' : ""}
      {...register('firstName',
        {
          required: true,
          minLength:{value:3, message:'Min Len atLeast 3'},
          maxLength:{value:6, message:"max length atmost 6"}
        })} />
        {errors.firstName && <p className='error-msg'>{errors.
        firstName.message}</p>}
     </div>
     <br/>
     <div>
      <label>Middle Name:</label>
      <input className={errors.firstName ? 'input-error' : ""}
      {...register('middleName')} />
     </div>
     <br/>
     <div>
      <label>Last Name:</label>
      <input 
      className={errors.firstName ? 'input-error' : ""}
      {...register('lastName', {
        pattern:{
          value: /^[A-Za-z]+$/i ,
          message: "Last name is not as per the rules"
        }
      })} />
      {errors.lastName && <p className='error-msg'>{errors.
        lastName.message}</p>}
     </div>
     <input type='submit' disabled={isSubmitting} />
   </form>
  )
}

export default App
