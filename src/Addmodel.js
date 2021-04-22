import React,{useState} from 'react'
import {Button,Modal} from 'react-bootstrap'

const Addmodel = ({handelMovieAdd}) => {
    const [show, setShow] = useState(false);
    const [movie, setmovie] = useState({
      title:"",
      description:"",
      posterURL:"",
      rating:""
    });


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlchange=(e)=>{
    setmovie({
      ...movie,[e.target.name]:e.target.value
    })
  }
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Add movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div >
              <label className="input">Title:</label>
              <input type="text" name="title" onChange={handlchange} className="input1"></input>
            </div>
            <div>
              <label className="input">description:</label>
              <input type="text" name="description" onChange={handlchange} className="input1"></input>
            </div>
            <div>
              <label className="input">posterURL:</label>
              <input type="text" name="posterURL" onChange={handlchange} className="input1"></input>
            </div>
            <div>
              <label className="input">rating:</label>
              <input type="text" name="rating" onChange={handlchange} className="input1"></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>handelMovieAdd(movie)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}
export default Addmodel
