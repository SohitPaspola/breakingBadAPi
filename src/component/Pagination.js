import React from 'react'

const Pagination = ({ paginate, lastIndex,setShowDetails }) => {

    const pageNumber = [];
    for (let i = 1; i <= lastIndex; i++) {
        pageNumber.push(i);
        
    }
    const onClickHandler = (pageNo) => {
        paginate(pageNo)
        setShowDetails((prev) => !prev)
    }

    return (
        <div>
            {
                pageNumber.map((pageNo) => {
                    return (
                        <button
                            key={pageNo}
                            className="btn btn-primary m-2"
                            onClick={() => onClickHandler(pageNo)}
                        >{pageNo}</button>
                    )
                })
            }
        </div>
    )
}

export default Pagination
