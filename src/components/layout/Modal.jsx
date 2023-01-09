import { useStoreState, useStoreActions } from "easy-peasy";
import { modalType } from "../../util/modalContent";

const Modal = () => {
  const showModal = useStoreState((state) => state.showModal);
  const setShowModal = useStoreActions((action) => action.setShowModal);

  const isErrorType = showModal.type === modalType.ERROR;
  const isConfirmType = showModal.type === modalType.CONFIRM;

  const handleConfirmation = (e) => {
    if (e.target.value === "YES") {
      const action = showModal.callback.action;
      const args = showModal.callback.args;

      // Function call
      action(args);

      // Addition clean up calls
      if (showModal.cleanUp) {
        const cleanUp = showModal.cleanUp?.action;
        const cleanUpArgs = showModal.cleanUp?.args;
        cleanUp(cleanUpArgs);
      }

      resetModal();
    } else {
      resetModal();
    }
  };

  const resetModal = () => {
    setShowModal({
      header: "",
      body: "",
      visible: false,
      type: modalType.INFO,
      callback: null,
      cleanup: null,
    });
  };

  return (
    <div
      className={`h-screen w-screen fixed bg-stone-900/80 animate-fade-in-short ${
        !showModal.visible ? "hidden" : "block"
      }`}
    >
      <div className="flex flex-col justify-between w-[350px] h-[250px] p-7 z-10 top-1/2 left-1/2 -mt-[200px] -ml-[175px] rounded-md shadow-2xl bg-white fixed sm:w-[400px] sm:-ml-[200px]">
        <div>
          <h1 className="text-xl font-semibold">{showModal.header}</h1>
        </div>
        <div
          className={`text-center ${
            isErrorType ? "text-red-500" : "text-stone-800"
          }`}
        >
          <p>{showModal.body}</p>
        </div>
        {isConfirmType ? (
          <div className="flex items-center gap-10">
            <button
              onClick={handleConfirmation}
              value={"YES"}
              className="w-3/4 p-2 text-stone-800 border-2 border-solid border-stone-800 rounded-md hover:bg-stone-800 hover:text-stone-100"
            >
              Yes, I agree
            </button>
            <button
              onClick={handleConfirmation}
              value={"NO"}
              className="w-3/4 p-2 text-stone-800 border-2 border-solid border-stone-800 rounded-md hover:bg-stone-800 hover:text-stone-100"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={handleConfirmation}
              className="w-1/4 p-1 text-stone-800 border-2 border-solid border-stone-800 rounded-md hover:bg-stone-800 hover:text-stone-100"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
