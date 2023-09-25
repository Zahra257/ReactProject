import axios from 'axios'
import { useFormik } from 'formik'
import React , {useState , useEffect}from 'react'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'
import { Link, useNavigate , useParams } from 'react-router-dom'

function EditeArticle() {
  // const[data , setData]=useState([])
  
  const navigate = useNavigate()
  let { id } = useParams();
  console.log(id)
  
  useEffect(()=>{
    axios.get(`http://localhost:3200/article/${id}`)
    .then(res=>      
      formik.setValues({...formik.values, ...res.data})
    )
    .catch(e=>console.log(e))     
    
  },[])
 
  const onSubmit = async (values, actions) => {
   
    try {
 
     const {data} = await axios.put(`http://localhost:3200/article/${id}`, values)
     
     navigate('/blog')
     
    } catch (error) {
       console.error(error)
    }
   }
   const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      img: ''
    },
    onSubmit
  })


  // const formik = useFormik({
  //   initialValues: {
  //     title: data.title,
  //     description: data.description,
  //     img: data.img
  //   },
  //   onSubmit
  // })
  
   console.log('formik', formik)

  return (
    <>
    
    <div className="row my-3">
        <div className="col-md-6">
          <h1>Edite article</h1>
        </div>
        <div className="col-md-6 text-end">
          <Link to="/blog" className='btn btn-primary'>
            <FaArrowLeft /> Back to list
          </Link>
        </div>  
      </div>

      <div className="row my-5">
        <div className="col-md-6 mx-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group my-3">
              <label htmlFor="">Title</label>
              <input 
                onChange={formik.handleChange}
                value={formik.values.title}
                type="text" 
                name="title" 
                id="title" 
                className="form-control" 
                placeholder="your title" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="">Description</label>
              <textarea 
                onChange={formik.handleChange}
                name="description" 
                id="description" 
                rows="5" 
                className="form-control" 
                value={formik.values.description} // Use 'value' instead of 'placeholder'
                ></textarea>
            </div>
            <div className="form-group my-3">
              <label htmlFor="">Image</label>
              <input 
                onChange={formik.handleChange}
                value={formik.values.img}
                type="url" 
                name="img" 
                id="image" 
                className="form-control" 
                placeholder="Your image" />
            </div>
            <div className="d-grid my-3">
              <button className="btn btn-primary">
                <FaPlus />
                <span className="ms-2">Edit article</span>
              </button>
            </div>
          </form>
        </div>     

      </div>
    </>
  )
}

export default EditeArticle