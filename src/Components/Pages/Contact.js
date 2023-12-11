import React, { useState } from 'react'
import{TailSpin} from 'react-loader-spinner';
import { userdata } from '../Firebase/Firebase'
import { addDoc } from 'firebase/firestore'
import Headingpage from './Headingpage'
const Contact = () => {

    const[loading , setloading]=useState(false);
    const [form, setform] = useState({
        name: '',
        email: '',
        contact:'',
        subject:'',
    })


    const Formsubmit = async () => {
        setloading(true);
        try {
            await addDoc(userdata, form);
            alert("Add data sussessfully");
            setloading(false);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <Headingpage title={"Contact Page"} />

            <div className='flex max-w-7xl  max-h-4xl  md:mx-auto my-8 gap-12 justify-center'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 mx-5 grid-cols-1 gap-1 '>
                    <div className='flex md:justify-end md:mr-10  justify-center mx-auto '>
                        <img src="https://img.freepik.com/premium-vector/cyber-safety-cyber-security-privacy-concept-cyber-defender-works-laptop_714605-12.jpg" className='lg:w-full  w-80  rounded-lg' alt="" />
                    </div>
                    <div className='ml-4'>
                        <div className='flex flex-col my-4'>
                            <label htmlFor="" className='font-semibold text-lg'>Enter Name:</label>
                            <input className='w-80 border-2 h-8  rounded' type="text" name='name' id='name' placeholder='Enter Name' value={form.name} onChange={(e) => setform({ ...form, name: e.target.value })} />
                        </div>

                        <div className='flex flex-col my-4'>

                            <label className='font-semibold text-lg' htmlFor="">Enter Email:</label> <br />
                            <input className='w-80 border-2 h-8 rounded' type="email" name='email' id='email' placeholder='Enter Email:' value={form.email} onChange={(e) => setform({ ...form, email: e.target.value })} /> <br />

                        </div>

                        
                        <div className='flex flex-col my-4'>

                            <label className='font-semibold text-lg' htmlFor="">Enter Contact:</label> <br />
                            <input className='w-80 border-2 h-8 rounded' type="number" name='contact' id='contact' placeholder='Enter contact:' value={form.contact} onChange={(e) => setform({ ...form, contact: e.target.value })} /> <br />

                        </div>

                        
                        <div className='flex flex-col my-4'>

                            <label className='font-semibold text-lg' htmlFor="">Enter Subject:</label> <br />
                            <input className='w-80 border-2 h-8 rounded' type="text" name='subject' id='subject' placeholder='Enter Subject:' value={form.subject} onChange={(e) => setform({ ...form, subject:e.target.value })} /> <br />

                        </div>
                        <button type='submit' className='w-80 h-8 mx-auto text-textcol font-bold my-4  bg-bgcol3' onClick={Formsubmit}>
                           <div className='w-full flex justify-center'> {loading ? <TailSpin height={25} color='white'/> :'Submit'}</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
