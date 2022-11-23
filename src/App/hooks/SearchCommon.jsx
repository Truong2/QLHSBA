import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { SearchIcon } from "../icons";
import { noop, trim } from "lodash";

const { Search } = Input;

function SearchCommon({
  suffixIcon,
  suffixIconName,
  onSearch,
  defaultValue,
  ...props
}) {
  const [valueSearch, setValueSearch] = useState(defaultValue);

  useEffect(() => {
    if (defaultValue !== valueSearch) setValueSearch(defaultValue);
  }, [defaultValue]);

  return (
    <>
      {suffixIconName ? (
        <Input
          suffix={suffixIcon || <SearchIcon style={{ color: "#999999" }} />}
          onSearch={(value) => {
            onSearch(trim(value));
            setValueSearch(trim(value));
          }}
          onChange={(event) => {
            setValueSearch(event.target.value);
          }}
          value={valueSearch}
          onBlur={() => {
            defaultValue !== valueSearch && setValueSearch(defaultValue);
          }}
          onPressEnter={({ target: { value } }) => {
            onSearch(trim(value) || undefined);
            setValueSearch(trim(value));
          }}
          {...props}
          enterButton={false}
        />
      ) : (
        <Search
          onSearch={(value) => {
            onSearch(trim(value));
            setValueSearch(trim(value));
          }}
          onChange={(event) => {
            setValueSearch(event.target.value);
          }}
          value={valueSearch}
          onBlur={() => {
            defaultValue !== valueSearch && setValueSearch(defaultValue);
          }}
          onPressEnter={({ target: { value } }) => {
            onSearch(trim(value) || undefined);
            setValueSearch(trim(value));
          }}
          {...props}
          enterButton={false}
        />
      )}
    </>
  );
}

SearchCommon.propTypes = {
  onSearch: PropTypes.func,
  defaultValue: PropTypes.string,
};

SearchCommon.defaultProps = {
  onSearch: noop,
  defaultValue: "",
};

export default SearchCommon;
