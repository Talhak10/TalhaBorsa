import { useState } from "react";
import Items from "./Items";
import ReactPaginate from "react-paginate";

export default function PaginatedItems({ loading, items, itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = Object.entries(items).slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Object.keys(items).length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % Object.keys(items).length;
      setItemOffset(newOffset);
    };
  
    return (
        <>
            <div
                className={
                    loading
                    ? "w-full flex items-center justify-center"
                    : Object.keys(items).length > 0
                    ? "w-full grid md:grid-cols-3 gap-4"
                    : "w-full flex items-center justify-center"
                }
            >
                <Items currentItems={currentItems} />
            </div>
            <ReactPaginate
                activeClassName="bg-white/50"
                breakClassName={'item break-me '}
                breakLabel={'...'}
                containerClassName="mt-4 p-5 bg-white/20 border border-white/50 rounded-lg flex flex-wrap items-center justify-center gap-4"
                disabledClassName={'disabled-page'}
                marginPagesDisplayed={2}
                nextClassName={"item next "}
                nextLabel={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>}
                onPageChange={handlePageClick}
                pageCount={pageCount}
                pageClassName={'item pagination-page '}
                pageRangeDisplayed={2}
                previousClassName={"item previous"}
                previousLabel={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/></svg>}
            />
        </>
    );
  }