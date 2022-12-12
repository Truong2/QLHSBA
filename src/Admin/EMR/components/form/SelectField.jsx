import { Col, Form, Select } from "antd";
import PropTypes from "prop-types";
import React from "react";

function SelectField({
  listOptions,
  placeholder,
  style,
  optionFilterProp,
  disabled,
  name,
  rules,
  className,
  label,
  mode,
  colWidth,
  defaultValue,
  subNote,
  ...props
}) {
  const isMobile = window.location.pathname.split("/").includes("mobile");

  const { onChange } = props;

  return (
    <Col className="find-patient-col" span={colWidth}>
      <Form.Item rules={rules} label={label} name={name}>
        <Select
          mode={mode}
          allowClear
          showSearch
          disabled={disabled}
          style={style}
          placeholder={placeholder}
          optionFilterProp={optionFilterProp}
          defaultValue={defaultValue}
          className={`${className} ${isMobile ? "fz-12" : ""}`}
          onChange={onChange}
          {...props}
        >
          {listOptions?.map((item) => (
            <Select.Option
              key={item?.key}
              value={item?.value}
              className={isMobile ? "fz-12" : ""}
            >
              {item?.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {subNote && (
        <span className="color-red sub-note fz-14 fw-600">{subNote}</span>
      )}
    </Col>
  );
}

export default SelectField;

SelectField.propTypes = {
  listOptions: PropTypes.array,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  optionFilterProp: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.any,
  rules: PropTypes.array,
  className: PropTypes.string,
  label: PropTypes.string,
  mode: PropTypes.string,
  subNote: PropTypes.string,
  colWidth: PropTypes.number,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};
