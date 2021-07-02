 import { ErrorMessage, Field } from "formik"
 
 export const FormField =({ name, label, type = 'text '}) => (
      <label>
         {label}
        <Field type={type} name={name} />
        <ErrorMessage className='error' component='div' name={name} />
     </label>
 )