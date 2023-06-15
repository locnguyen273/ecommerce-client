import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";

const Loading = () => {
  const loadingStore = useSelector(
    (state: RootState) => state.LoadingReducer.isLoadingCommon
  );

  return (
    <>
      {loadingStore ? (
        <div className="loading-component">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loading;
