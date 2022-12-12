import { Col, Form, Input, InputNumber } from "antd";
import PropTypes from "prop-types";
import React from "react";

function InputField({
  label,
  name,
  placeholder,
  subLabel = " ",
  subMessages,
  subNote,
  hideField,
  max,
  min,
  rules,
  isInputNumber,
  colWidth,
  value,
  precision,
  onKeyPress,
  defaultValue,
  ...props
}) {
  const { suffix, addonAfter } = props;
  return (
    !hideField && (
      <Col xs={colWidth || 24}>
        <Form.Item
          name={name}
          label={label}
          rules={rules}
          className="form-item-input"
          validateTrigger="onChange"
        >
          {!isInputNumber ? (
            <Input
              placeholder={placeholder}
              defaultValue={value}
              suffix={suffix}
              {...props}
            />
          ) : (
            <InputNumber
              placeholder={placeholder}
              {...props}
              max={max}
              min={min}
              addonAfter={addonAfter}
              precision={precision}
              onKeyPress={onKeyPress}
              defaultValue={defaultValue}
            />
          )}
        </Form.Item>

        {subMessages && (
          <Form.Item label={subLabel}>
            {subMessages.map((message, index) => (
              <p
                className={`${"mt-5 fz-12 sub-mesage"} ${message.css}`}
                key={index}
              >
                {message.text}
              </p>
            ))}
          </Form.Item>
        )}
        {subNote && (
          <span className="color-red sub-note fz-14 fw-600">{subNote}</span>
        )}
      </Col>
    )
  );
}
InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  subLabel: PropTypes.string,
  subMessages: PropTypes.array,
  placeholder: PropTypes.string,
  rules: PropTypes.array,
  isInputNumber: PropTypes.bool,
  colWidth: PropTypes.number,
  subNote: PropTypes.string,
  value: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  precision: PropTypes.number,
  onKeyPress: PropTypes.func,
  defaultValue: PropTypes.number,
  suffix: PropTypes.string,
  addonAfter: PropTypes.string,
  hideField: PropTypes.bool,
};
export default InputField;
