import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { FaArrowLeft, FaPlus } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function AddArticle() {

  const navigate = useNavigate()

  const onSubmit = async (values, actions) => {
   console.log(values)
   try {

    const { data } = await axios.post('http://localhost:3200/article', values)
    actions.resetForm()
    toast.success('article is added ', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  //  navigate('/blog')
    
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

  console.log(formik)

  return (
    <>
    
    <div className="row my-3">
        <div className="col-md-6">
          <h1>New article</h1>
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
                placeholder="Your description"
                value={formik.values.description}></textarea>
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
                <span className="ms-2">Add an article</span>
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default AddArticle