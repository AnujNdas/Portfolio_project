import { useState , useRef } from "react"
import { motion } from "framer-motion"
import  emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"
import { Sectionwrapper } from "../hoc"

// template_41w1ouf
// service_oc6ge7a

const Contact = () => {
    const formRef = useRef();
    const [form , setForm ] = useState({
      name : "",
      email : "",
      message : ""
    })

    const [loading , setLoading] = useState(false)

    const handlechange = (e) => {
      const { name , value } = e.target;
      
      setForm({ ...form , [name]: value})
    }
    const handlesubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      emailjs.send(
        'service_oc6ge7a',
        'template_41w1ouf',
        {
          from_name : form.name,
          to_name : 'Anuj',
          from_email : form.email,
          to_email: 'anujd339@gmail.com',
          message : form.message
        },
        "l11r5a2VGwpweIwp3"
      ).then(()=>{
        setLoading(false)
        alert("Thank you . I will get to you as soon as possible")

        setForm=({
          name : "",
          email : "",
          message : ""
        })
      }),((error)=>{
        setLoading(false)
        console.log(error)
        alert("something went wrong")
      })
    }
    return (
     <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
       variants={slideIn("left", "tween", 0.2 , 1)}
       className="flex-[0.75] bg-black-100 p-8 rounded2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <p className={styles.sectionHeadText}>
          Contact
        </p>

        <form
         ref={formRef}
         onSubmit={handlesubmit}
         className="mt-12 flex flex-col gap-8"
        >
          <label
           className="flex flex-col"
          >
            <span className="text-white" font-nedium mb-4> Your name </span>
            <input
             type="text"
             name="name"
             value={form.name}
             onChange={handlechange}
             placeholder="What's your name"
             className="bg-teritary py-4 px-6 placeholder:text-secondarytext-whte rounded-lg outlined-none b border-none font-medium"
            />
          </label>
          <label
           className="flex flex-col"
          >
            <span className="text-white" font-nedium mb-4> Your E mail </span>
            <input
             type="text"
             name="email"
             value={form.email}
             onChange={handlechange}
             placeholder="What's your E mail"
             className="bg-teritary py-4 px-6 placeholder:text-secondarytext-whte rounded-lg outlined-none b border-none font-medium"
            />
          </label>
          <label
           className="flex flex-col"
          >
            <span className="text-white" font-nedium mb-4> Your Message </span>
            <textarea
             type="text"
             name="message"
             value={form.message}
             onChange={handlechange}
             placeholder="Your message"
             className="bg-teritary py-4 px-6 placeholder:text-secondarytext-whte rounded-lg outlined-none b border-none font-medium"
            />
          </label>
          <button
           type="submit"
           className="bg-teritary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'sending ....' : 'send'}
          </button>
        </form>
      </motion.div>

      <motion.div
       variants={slideIn("right", "tween", 0.2 , 1)}
       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
     </div>
  )
}

export default Sectionwrapper(Contact,"contact")