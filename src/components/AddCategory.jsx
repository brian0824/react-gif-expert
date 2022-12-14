import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory /* setCategories */ }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(inputValue);
    if (inputValue.trim().length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
