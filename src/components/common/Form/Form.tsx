import { useForm } from 'react-hook-form'

interface IFormProps {
  onSubmit: () => void
  children: React.ReactNode
}

const Form = ({ onSubmit, children }: IFormProps) => {
  const { handleSubmit } = useForm()

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
}

export default Form
