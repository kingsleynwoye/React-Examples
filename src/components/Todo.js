import { useState} from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {

   const [modal, setModal] = useState(false);

    function deleteHandler () {
      setModal(true);
    }

    function closeModalHandler () {
        setModal(false);
    }

    return <div>
    <div className='card'>
    <h2 >
    {props.text}
      </h2>
    <div  className='actions'>
    <button className='btn' onClick={deleteHandler}>
      Delete
      </button>
      </div>
      {modal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
      {modal && <Backdrop onClick={closeModalHandler}/>}
    </div>
  </div>;
}

export default Todo;