import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  /* These are props that are destructured */ /* while using the forwardRef, the ref is used as the second augument of the func after the first augument (props) */

  const dialog = useRef();

  // useImperativeHandle accepts two augument, a ref from forwardRef and a function. then returns a method (openDialog) that triggers the dialog with showmodal
  useImperativeHandle(ref, () => {
    return {
      openDialog() {
        dialog.current.showModal();
      },
    };
  });
  return (
    // Now, you can use div instead of dialog

    <dialog ref={dialog} className="result-modal">
      {" "}
      {/* i'm meant to use "open" on this section but it won't have a blur background, so a showmodal method was use instead in Timerchallenge component*/}
      <h2>You {result}</h2>
      <p>
        the target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
        {/* this btn closes the dialog box by default without using js blc dialog method is used in the form */}
      </form>
    </dialog>
  );
});
export default ResultModal;
