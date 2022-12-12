import React, { useState } from "react";
import { Button, Col, Form, Image, Radio, Space } from "antd";
import { t } from "i18next";
import PropTypes from "prop-types";

function SelectImage({
  listDataOptions,
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
  const [value, setValue] = useState(null);
  const [showListOptions, setShowListOptions] = useState(true);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    setShowListOptions(!showListOptions);
  };

  return (
    <Col xs={colWidth || 24}>
      <Form.Item rules={rules} label={label} name={name}>
        {showListOptions && (
          <Radio.Group defaultValue={1} onChange={onChange} value={value}>
            <Space className="display-flex flex-wrap">
              {listDataOptions?.map((item) => (
                <Radio value={item.id}>
                  <Image width={200} src={item.url} />
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        )}
      </Form.Item>
      <Form.Item className="display-flex jc-center">
        <Button className="show-btn" onClick={handleClick}>
          {showListOptions ? t("button.hideOptions") : t("button.showOptions")}
        </Button>
      </Form.Item>
    </Col>
  );
}

export default SelectImage;

SelectImage.propTypes = {
  listDataOptions: PropTypes.array,
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
