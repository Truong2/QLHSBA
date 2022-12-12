import { Col, Form, Input } from "antd";
import PropTypes from "prop-types";
import React from "react";

function TextAreaField({
  label,
  name,
  placeholder,
  subLabel = " ",
  subMessages,
  rules,
  ...props
}) {
  return (
    <Col>
      <Form.Item
        name={name}
        label={label}
        rules={rules}
        className="form-item-input"
      >
        <Input.TextArea
          rows={5}
          {...props}
          placeholder={placeholder}
          autoSize={false}
        />
      </Form.Item>
      {subMessages && (
        <Form.Item label={subLabel} className="sub-mesage">
          {subMessages.map((message, index) => (
            <p className="mt-5 fz-12" key={index}>
              {message}
            </p>
          ))}
        </Form.Item>
      )}
    </Col>
  );
}

TextAreaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  subLabel: PropTypes.string,
  subMessages: PropTypes.array,
  rules: PropTypes.array,
  className: PropTypes.string,
};

export default TextAreaField;
