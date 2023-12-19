import React, { useEffect, useState } from 'react'
import Headingpage from './Headingpage'
import { addDoc, getDocs } from 'firebase/firestore'
import{addblog} from '../Firebase/Firebase'
const Addblog = () => {
    const[blog,setblog]=useState([]);
    const [form, setform] = useState({
        title: '',
        image: '',
        author: '',
        category: '',
        published_date: '',
        reading_time: '',
        content: '',
    })

    const Submit = async () =>{
       
        try {
            await addDoc(addblog,form);
            alert("Add data successfully");
            console.log(form);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        async function getData(){
            const _data = await getDocs(addblog);
            const dataArr = [];
            _data.forEach((Doc) =>{
                dataArr.push({...Doc.data(), id:Doc.id});
            });
            setblog(dataArr);
        }
        getData();
    },[]);
    return (
        <div>
            <Headingpage title={"Add Blog Page"} />
            <div className='flex flex-col my-4'>
                <label htmlFor="" className='font-semibold text-lg'>Enter Title:</label>
                <input className='w-80 border-2 h-8  rounded' type="text" name='name' id='name' placeholder='Enter blog title' value={form.title} onChange={(e) => setform({ ...form, title: e.target.value })} />
            </div>

            <div className='flex flex-col my-4'>
                <label htmlFor="" className='font-semibold text-lg'>Enter Image:</label>
                <input className='w-80 border-2 h-8  rounded' type="text" name='image' id='image' placeholder='Enter image url' value={form.image} onChange={(e) => setform({ ...form, image: e.target.value })} />
            </div>

            <div className='flex flex-col my-4'>
                <label htmlFor="" className='font-semibold text-lg'>Enter Author:</label>
                <input className='w-80 border-2 h-8  rounded' type="text" name='author' id='author' placeholder='Enter Author Name' value={form.author} onChange={(e) => setform({ ...form, author: e.target.value })} />
            </div>

            <div className='flex flex-col my-4'>
                <label htmlFor="" className='font-semibold text-lg'>Enter published_date:</label>
                <input className='w-80 border-2 h-8  rounded' type="date" name='published_date' id='published_date' placeholder='Enter published_date' value={form.published_date} onChange={(e) => setform({ ...form, category: e.target.value })} />
            </div>

            <div className='flex flex-col my-4'>
                <label htmlFor="" className='font-semibold text-lg'>Enter category:</label>
                <input className='w-80 border-2 h-8  rounded' type="text" name='category' id='category' placeholder='Enter category' value={form.category} onChange={(e) => setform({ ...form, published_date: e.target.value })} />
            </div>

            <div className='flex flex-col my-4'>
                <label htmlFor="" className='font-semibold text-lg'>Enter reading_time:</label>
                <input className='w-80 border-2 h-8  rounded' type="text" name='reading_time' id='reading_time' placeholder='Enter reading_time' value={form.reading_time} onChange={(e) => setform({ ...form, reading_time: e.target.value })} />
            </div>


            <div className='flex flex-col my-4'>
                <label htmlFor="" className='font-semibold text-lg'>Enter Content:</label>
                <input className='w-80 border-2 h-8  rounded' type="text" name='content' id='content' placeholder='Enter reading_time' value={form.content} onChange={(e) => setform({ ...form, content: e.target.value })} />
            </div>
            
            <button onClick={Submit} className='bg-bgcol2 text-white'>Submit data</button>


            <div>
                {blog.map((e,i)=>(
                    <>
                    <h1>{e.title}</h1>
                    <img src={e.image} alt="" />
                    </>
                ))}
            </div>
        </div>
    )
}

export default Addblog
