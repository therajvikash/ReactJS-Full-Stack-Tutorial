import React, { useState } from "react"

const InputEX = () => {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  })
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card ">
              <div className="card-header text-center text-white bg-dark">
                <p className="h2">Register</p>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) =>
                        setName({ ...name, firstname: e.target.value })
                      }
                      value={name.firstname}
                      placeholder="Firstname"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={(e) =>
                        setName({ ...name, lastname: e.target.value })
                      }
                      className="form-control"
                      type="text"
                      value={name.lastname}
                      placeholder="Lastname"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <p className="h3">Your firstname : {name.firstname}</p>
                <p className="h3">Your lastname : {name.lastname}</p>
                <p className="h3"> {JSON.stringify(name)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default InputEX
