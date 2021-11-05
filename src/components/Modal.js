
function Modal (props) {
  function Cancelhandler () {
  props.onCancel();
  }

   function Confirmhandler () {
   props.onConfirm();
   }

   return (
       <div className="modal">
           <p>Are you sure?</p>
           <button className="btn btn--alt" onClick={Cancelhandler}>Cancel</button>
           <button className="button" onClick={Confirmhandler}>Confirm</button>
       </div>
   )
}

export default Modal;