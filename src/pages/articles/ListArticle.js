import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlusSquare, FaTh, FaThList } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import Photo from "./photo.png";
import Photo2 from "./availble.png";


function ListArticle() {

  const [article, setArticle] = useState([]);
  const [list, setList] = useState(true);

/////////////////////////////////////////////////list article///////////////////
  const getArticles = async () => {
    try {
      const { data } = await axios.get("http://localhost:3200/article");
      setArticle(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  /////////////////////////////////////////////delete article///////////////////
  const supprimer = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          if (result.isConfirmed) {
            axios.delete(`http://localhost:3200/article/${id}`)
            .then((res) => {
              if(res.status === 200) {
                getArticles();
              }
            });
          }
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
 
 ///////////////////////////////////////////////////////////edit status of article///////////////
  const Editstatus = (id, statusofarticle) => {
    axios
      .patch(`http://localhost:3200/article/${id}`, {
        available: !statusofarticle,
      })
      .then((res) => {
        if(res.status === 200) {
          getArticles();
        }      });

  };

  return (
    <div>
      <div className="row my-3">
        <div className="col-md-6">
          <h1>List of article</h1>
        </div>
        <div className="col-md-6 text-end">
          <Link to="/blog/add" className="btn btn-primary">
            <FaPlusSquare />
            Add
          </Link>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-12">
          <button
            className={`btn btn-dark me-2 ${list === true ? "active" : ""}`}
            onClick={() => setList(true)}
          >
            <FaTh />
          </button>
          <button
            className={`btn btn-dark me-2 ${list === false ? "active" : ""}`}
            onClick={() => setList(false)}
          >
            <FaThList />
          </button>
        </div>
      </div>

      <div className="row">
        {list ? (
          article.map((e) => (
            <>
              <div className="col-md-3 mb-5">
                <div class="card text-start">
                  <img class="card-img-top" src={e.img} alt="Title" />
                  <div class="card-body row">
                    <div className="col-8">
                      <h4 class="card-title">{e.title}</h4>
                      <p class="card-text">{e.description}</p>
                    </div>
                    <div className="col-4">
                      <p class="card-text">
                        {e.available ? (
                          <>
                            <img src={Photo2} width="50" height="50" />
                          </>
                        ) : (
                          <>
                            <img src={Photo} width="50" height="50" />
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="col-md-12">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {article &&
                  article.map((article) => (
                    <tr key={article.id}>
                      <td>
                        {" "}
                        <img
                          src={article.img}
                          alt={article.title}
                          width="80px"
                        />
                      </td>
                      <td>{article.title}</td>
                      <td>{article.description}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => supprimer(article.id)}
                        >
                          Supprimer
                        </button>
                      </td>
                      <td>
                        <Link to={`/blog/edit/${article.id}`}>
                          <button className="btn btn-success">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className={`btn btn-${
                            article.available ? "success" : "danger"
                          }`}
                          onClick={() =>
                            Editstatus(article.id, article.available)
                          }
                        >
                          {article.available === true ? (
                            <>availble</>
                          ) : (
                            <>out of stock</>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      
      </div>
    </div>
  );
}

export default ListArticle;
