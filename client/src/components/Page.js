import React from 'react'

const Page = () => {
    return (
        <div className='container'>
            <br/>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <h1>Sorting Algorithms</h1>
                </div>
                <div className="dropdown">
                    <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select algorithm
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="jakewaro.com">Action</a>
                        <a className="dropdown-item" href="jakewaro.com">Another action</a>
                        <a className="dropdown-item" href="jakewaro.com">Something else here</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page;