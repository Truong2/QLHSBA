import { Button, Checkbox, Modal, Row } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import InputField from "../form/InputField";

function MyDialog({
  showModal,
  setShowModal,
  textConfirm,
  textInput,
  textBtnOk,
  textCheckbox,
  textBtnCancel,
  textHolderArea,
  setValueArea,
  handleOk,
  handleCancel,
  onChangeInput,
  customClass,
  firstDataConfirm,
  secondDataConfirm,
  children,
}) {
  const [checked, setChecked] = useState(false);

  const onClickOk = () => {
    if (typeof handleOk === "function") {
      handleOk();
    } else {
      setShowModal(false);
    }
  };

  const onClickCancel = () => {
    if (typeof handleCancel === "function") {
      handleCancel();
    } else {
      setShowModal(false);
    }
  };

  const toggleCheck = () => {
    setChecked(!checked);
  };

  const onChangeArea = (e) => {
    setValueArea(e.target.value);
  };

  return (
    showModal && (
      <Modal
        visible={showModal}
        footer={null}
        onOk={onClickOk}
        onCancel={onClickCancel}
        closable={false}
        className="modal-confirm"
        wrapClassName={customClass}
      >
        {children || (
          <>
            <h1 className={textHolderArea ? "text-left" : ""}>{textConfirm}</h1>
            {firstDataConfirm && <div>{firstDataConfirm}</div>}
            {secondDataConfirm && <div>{secondDataConfirm}</div>}
            {textHolderArea && (
              <div className="modal-note-text">{textHolderArea}</div>
            )}
            {textInput && (
              <InputField placeholder={textInput} onChange={onChangeInput} />
            )}
            <Row
              gutter={[8, 8]}
              align="middle"
              justify="space-between"
              className="display-flex group-btn"
            >
              {textCheckbox && (
                <Checkbox checked={checked} onChange={toggleCheck}>
                  {textCheckbox}
                </Checkbox>
              )}
              <Button className="cancel-btn" onClick={onClickCancel}>
                {textBtnCancel}
              </Button>
              <Button
                className="ok-btn"
                disabled={textCheckbox && !checked}
                onClick={onClickOk}
              >
                {textBtnOk}
              </Button>
            </Row>
          </>
        )}
      </Modal>
    )
  );
}

export default MyDialog;

MyDialog.propTypes = {
  textConfirm: PropTypes.string,
  textInput: PropTypes.string,
  textBtnOk: PropTypes.string,
  textBtnCancel: PropTypes.string,
  textCheckbox: PropTypes.string,
  textHolderArea: PropTypes.string,
  setValueArea: PropTypes.func,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func,
  onChangeInput: PropTypes.func,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  customClass: PropTypes.string,
  firstDataConfirm: PropTypes.string,
  secondDataConfirm: PropTypes.string,
  children: PropTypes.any,
};
