import { useState, Fragment } from "react";
import { QuestionCategory } from "./index";
import { Dialog, Transition } from "@headlessui/react";

export default function PopUpQandA({ temp }) {
  const [displayContent, setDisplayContent] = useState(false);
  function handleClick() {
    setDisplayContent((current) => !current);
  }

  return (
    <>
      <button onClick={handleClick}>PopUpQandA</button>
      {displayContent && (
        <div className="mb-3">
          <QuestionCategory temp={temp} />
        </div>
      )}

      <Transition appear show={isOpenInfo} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-black-opacity-400 h-full w-full"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            {/* This makes it close when clicking outside of the Modal */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            {/* This makes adds transition when open/close*/}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-4 my-8 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex justify-end items-center"></div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

//Add a Button X
//Add a handleClick function to the button. X
//handleClick - UseState(false) set to true when clicked open. X
//handleClick - UseState(false) Set false when clicked again.
//If not true set to true
//Clicking the button should open a container.
//handleClick - opens container, toggles open/close to show content inside the container.
//handleClick - function updates the useState and updates button icon when toggled.

//Container - importing QuestionCategory.js component
//Container - full overlay when mobile, small overlay when bigger screen.
//Container - Add button inside container to close container
