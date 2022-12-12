import React from "react";
import { Row } from "antd";
import PropTypes from "prop-types";

function MyTag({ text, size = "md", type = "status", ...props }) {
  return (
    <Row
      align="middle"
      justify="center"
      className={`my-tag size-${size} type-${type}`}
      {...props}
    >
      {text}
    </Row>
  );
}

export default MyTag;

MyTag.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["status", "required"]),
};
