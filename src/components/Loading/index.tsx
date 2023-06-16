import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import LoadingAnimation from "../../assets/images/loading-animation.gif";

const Loading = () => {
  const loadingStore = useSelector(
    (state: RootState) => state.LoadingReducer.isLoadingCommon,
  );

  return (
    <>
      {loadingStore ? (
        <div className="loading-component">
          <img src={LoadingAnimation} alt="" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Loading;
