import closeIcon from "../icons/close-error-svgrepo-com.svg";
import GlobalButton from "./GlobalButton";

type ModalProps = {
  modalTitle: string
  onClose: () => void
  onStart: () => void
}

const ModalContent = ({ modalTitle, onClose, onStart }: ModalProps) => {
  return (
    <div className="mx-auto my-6 w-auto max-w-lg justify-evenly items-center absolute w-[250px] left-[calc(50%_-_125px)] inset-y-[70px]">
      <div className="relative flex w-full flex-col rounded-lg border-0 bg-white dark:bg-gray-800 shadow-lg outline-hidden focus:outline-hidden">
        <div className="flex items-start justify-between rounded-t p-5 gradient-underline dark:gradient-underline-dark">
          <h3 className="text-3xl font-semibold">{modalTitle}</h3>
          <button className="cursor-pointer float-right p-1 leading-none opacity-70 dark:fill-honeydew hover:opacity-100 transition" onClick={onClose}><img src={closeIcon} alt="Close Button" className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="relative flex-auto p-6 gradient-underline-reverse dark:gradient-underline-reverse-dark">

      </div>
        <div className="flex items-center justify-end rounded-b p-6">
          <GlobalButton title="Start" onClick={() => onStart()} />
        </div>
    </div>
  );
}

export default ModalContent;
