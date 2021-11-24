import React from 'react'

function Refs() {
    return (
        <div>
             const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value =
      "The quick brown fox jumps over the lazy dog";
      focusPoint.current.focus();
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <Fragment>
      <div>
        <button onClick={onClickHandler}>
         ACTION
        </button>
      </div>
      <label>
       Click on the action button to
       focus and populate the text.
      </label><br/>
      <textarea ref={focusPoint} cols="30" rows="20" />
    </Fragment>
    </div>
  ); 
        </div>
    )
}

export default Refs
