import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  /* These are props that are destructured */ /* while using the forwardRef, the ref is used as the second augument of the func after the first augument (props) */

  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
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

    createPortal(
      <dialog ref={dialog} className="result-modal">
        {" "}
        {/* i'm meant to use "open" on this section but it won't have a blur background, so a showmodal method was use instead in Timerchallenge component*/}
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>Your score:{score} </h2>}
        <p>
          the target time was{" "}
          <strong>
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </strong>
        </p>
        <p>
          You stopped the timer with <strong>{formattedRemainingTime}</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
          {/* this btn closes the dialog box by default without using js blc dialog method is used in the form */}
        </form>
      </dialog>,
      document.getElementById("modal")
    )
  );
});
export default ResultModal;
