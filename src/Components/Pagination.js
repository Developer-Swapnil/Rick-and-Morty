import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
// import { NextPageCharacter } from "../Actions/Actions";
import { characterAction } from "../Reducers/Reducer";
export const Pagination = () => {
  const dispatch = useDispatch();
  const [click, setClickHandler] = useState(" ");
  const { characterFilterData, characterData } = useSelector(
    (state) => state.CharacterStore
  );
  const handlePageClick = (data) => {
    // console.log(pageCount);
    console.log(data.selected + 1);
    setClickHandler(data.selected + 1);
    dispatch(
      characterAction.statusReducer({
        type: "pageNumber",
        payload: data.selected + 1,
      })
    );
  };

  return (
    <React.Fragment>
      {Object.keys(characterData).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={characterData.info.pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      )}
    </React.Fragment>
  );
};
