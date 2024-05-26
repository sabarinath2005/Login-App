import React from 'react'

const SearchForm = () => {
  return (
    <div>
      <br /><div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">recipe title</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
