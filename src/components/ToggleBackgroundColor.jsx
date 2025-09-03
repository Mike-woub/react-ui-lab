import React, { useReducer } from 'react';

const initialState = {
  backgroundColor: 'white',
  textColor: '#1b1b1b',
  buttonStyle: 'white',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const isWhite = state.backgroundColor === 'white';
      return {
        backgroundColor: isWhite ? '#1b1b1b' : 'white',
        textColor: isWhite ? '#ffa31a' : '#1b1b1b',
        buttonStyle: isWhite ? '#1b1b1b' : 'white',
      };
    default:
      return state;
  }
};

const ToggleBackgroundColor = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className='toggle-body'>
      <div style={{ backgroundColor: state.backgroundColor, color: state.textColor }}>
        <h1 style={{ textAlign: 'center' }}>Background Color Toggler</h1>
        <div className='button-container'>
          <button
            className='toggle-btn'
            onClick={handleClick}
            style={{
              backgroundColor: state.buttonStyle,
              color: state.textColor,
              border: `2px solid ${state.textColor}`,
            }}
          >
            {state.backgroundColor === '#1b1b1b' ? 'Black Theme' : 'White Theme'}
          </button>
        </div>
        <section className='toggle-section'>
          <h1>Welcome to The real World</h1>
        </section>
      </div>
    </div>
  );
};

export default ToggleBackgroundColor;
