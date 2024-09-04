import { useRef, useState } from "react"


const Contact = () => {

  const formRef = useRef();
  const [form , setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading,setLoading] = useState(false);

  function handleChange(){

  }
  function handleSubmit(){
    setLoading(true);
  }

  return (
    <div>Contact</div>
  )
}

export default Contact