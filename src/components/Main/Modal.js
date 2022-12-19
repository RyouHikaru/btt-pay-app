import { useStoreState, useStoreActions } from "easy-peasy";

const Modal = () => {
  const showModal = useStoreState((state) => state.showModal);
  const setShowModal = useStoreActions((action) => action.setShowModal);

  const handleConfirmation = (e) => {
    if (e.target.value === 'YES') {
      const action = showModal.action.callback;
      const data = showModal.action.args;

      action(data);
    } else {
      resetModal();
    }
  }

  const getModalClass = () => {
    let modalClass = "h-screen w-screen fixed bg-stone-900/80 hidden";
    return !showModal.visible ? modalClass : modalClass.replace('hidden', '');
  }
  
  const getModalTypeClass = (type) => {
    switch(type) {
      case 'CONFIRM':
        return <div className='flex items-center gap-10'>
                  <button onClick={handleConfirmation} value={"YES"} className='w-3/4 p-2 bg-green-800 text-slate-100 rounded-md hover:opacity-75'>Yes</button>
                  <button onClick={handleConfirmation} value={"NO"} className='w-3/4 p-2 bg-red-700 text-slate-100 rounded-md hover:opacity-75'>No</button>
                </div>
      default:
        return <div className='flex justify-center'>
                <button onClick={handleConfirmation} className='w-1/4 p-1 bg-stone-800 text-slate-100 rounded-md hover:opacity-75'>Close</button>
               </div>
    }
  }

  const resetModal = () => {
    setShowModal({
      header: '',
      body: '',
      visible: false,
      type: 'INFO',
      action: null
    });
  }

  return (
    <div className={getModalClass()}>
      <div className='flex flex-col justify-between p-7 z-10 w-[400px] h-[200px] top-1/2 left-1/2 -mt-[200px] -ml-[200px] rounded-md shadow-2xl bg-white fixed'>
        <div>
          <h1 className='text-xl font-semibold'>{showModal.header}</h1>
        </div>
        <div className='text-center'>
          <p>{showModal.body}</p>
        </div>
        {getModalTypeClass(showModal.type)}
      </div>
    </div>
  )
}

export default Modal