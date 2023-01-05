import { useStoreState, useStoreActions } from "easy-peasy";

const Modal = () => {
  const showModal = useStoreState((state) => state.showModal);
  const setShowModal = useStoreActions((action) => action.setShowModal);

  const handleConfirmation = (e) => {
    if (e.target.value === "YES") {
      const action = showModal.callback.action;
      const args = showModal.callback.args;

      // Function call
      action(args);

      resetModal();
    } else {
      resetModal();
    }
  };

  const getModalClass = () => {
    let modalClass = "h-screen w-screen fixed bg-stone-900/80 hidden";
    return !showModal.visible ? modalClass : modalClass.replace("hidden", "");
  };

  const getModalBodyClass = (type) => {
    let modalBodyClass = "text-center text-stone-800";
    return type !== "ERROR"
      ? modalBodyClass
      : modalBodyClass.replace("text-stone-800", "text-red-500");
  };

  const getModalButtonClass = (type) => {
    switch (type) {
      case "CONFIRM":
        return (
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
        );
      default:
        return (
          <div className="flex justify-center">
            <button
              onClick={handleConfirmation}
              className="w-1/4 p-1 text-stone-800 border-2 border-solid border-stone-800 rounded-md hover:bg-stone-800 hover:text-stone-100"
            >
              Close
            </button>
          </div>
        );
    }
  };

  const resetModal = () => {
    setShowModal({
      header: "",
      body: "",
      visible: false,
      type: "INFO",
      action: null,
    });
  };

  return (
    <div className={getModalClass()}>
      <div className="flex flex-col justify-between w-[350px] h-[250px] p-7 z-10 top-1/2 left-1/2 -mt-[200px] -ml-[175px] rounded-md shadow-2xl bg-white fixed sm:w-[400px] sm:-ml-[200px]">
        <div>
          <h1 className="text-xl font-semibold">{showModal.header}</h1>
        </div>
        <div className={getModalBodyClass(showModal.type)}>
          <p>{showModal.body}</p>
        </div>
        {getModalButtonClass(showModal.type)}
      </div>
    </div>
  );
};

export default Modal;
