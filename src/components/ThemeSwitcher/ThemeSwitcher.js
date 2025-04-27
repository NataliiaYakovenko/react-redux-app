import React from "react";
import { connect } from "react-redux";
import { changeTheme } from "../../store/slices/themeSlices";

function ThemeSwitcher({ isLight, setNewTheme }) {
  const themeChangeHandler = () => {
    setNewTheme(!isLight);
  };

  return (
    <button onClick={themeChangeHandler}>
      {isLight ? "Set Dark" : "Set Light"}
    </button>
  )
}

const mapStateToProps = state => {
  return state.theme;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNewTheme: (value) => {
     return dispatch(changeTheme(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
