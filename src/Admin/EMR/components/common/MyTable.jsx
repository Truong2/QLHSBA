import { PlusSquareFilled, SearchOutlined } from '@ant-design/icons';
import { Card, ConfigProvider, Input, Row, Table } from 'antd';
import locale from 'antd/lib/locale/ja_JP';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MyTable({
  titleTable,
  columns,
  dataSource,
  data,
  setDataSource,
  handleRecord,
  isHasRedirect,
  handleRedirectAddPage,
  titleRedirectAddPage,
  placeholderSearch,
  isSelectTable,
  classTable,
  isHasSearch,
  pagination,
  onChangeTable,
  loading,
  isDynamicData,
  handleSearchData,
  stateTabData,
  handleSelectTab,
  ...props
}) {
  const { t } = useTranslation();
  const onSearch = (event) => {
    if (event.key === 'Enter') {
      handleSearchData(event.target.value);
    }
  };

  const configPagination = {
    position: ['bottomRight'],
    pageSize: pagination?.take,
    current: pagination?.current,
    total: pagination?.total,
  };

  return (
    <div className="my-table-default">
      <Card
        bordered={false}
        title={titleTable}
        extra={
          <div className="display-flex js-flex-end">
            {isHasSearch && (
              <Input
                onKeyPress={onSearch}
                className="table-search"
                name="searchValue"
                type="text"
                placeholder={placeholderSearch}
                prefix={<SearchOutlined />}
              />
            )}

            {isHasRedirect && (
              <Row
                onClick={handleRedirectAddPage}
                className="ml-20"
                align="middle"
              >
                <PlusSquareFilled className="fz-32 plus-btn" size="large" />
                <span className="color-white fw-600 ml-5">
                  {titleRedirectAddPage}
                </span>
              </Row>
            )}
          </div>
        }
      >
        <div className="table-responsive">
          <ConfigProvider locale={locale}>
            <Table
              columns={columns}
              dataSource={data}
              loading={loading}
              pagination={configPagination}
              className={`fw-600 table-custom  ${classTable}`}
              rowKey={(record) => record.id || record.userId}
              onRow={(record, rowIndex) => {
                return {
                  onClick: (event) => {
                    handleRecord(record);
                  },
                };
              }}
              onChange={onChangeTable}
            />
          </ConfigProvider>
        </div>
      </Card>
    </div>
  );
}

MyTable.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.object,
  data: PropTypes.array,
  titleTable: PropTypes.string,
  handleRecord: PropTypes.func,
  isHasRedirect: PropTypes.bool,
  handleRedirectAddPage: PropTypes.func,
  titleRedirectAddPage: PropTypes.string,
  placeholderSearch: PropTypes.string,
  isSelectTable: PropTypes.bool,
  setDataSource: PropTypes.func,
  classTable: PropTypes.string,
  isHasSearch: PropTypes.bool,
  pagination: PropTypes.object,
  onChangeTable: PropTypes.func,
  loading: PropTypes.bool,
  isDynamicData: PropTypes.bool,
  handleSearchData: PropTypes.func,
  stateTabData: PropTypes.string,
  handleSelectTab: PropTypes.func,
};

export default MyTable;
