import React from 'react'

export const Input = ({input, onFilter}) => {
  return(
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              id="text"
              type="text"
              value={input}
              onChange={onFilter}
              className="validate"
              autoFocus
            />
            <label htmlFor="text">Search bar</label>
          </div>
        </div>
      </form>
    </div>
  )
}
