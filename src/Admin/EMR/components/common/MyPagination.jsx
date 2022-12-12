import { IconNext, IconPrev } from '@assets/icons';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import React from 'react';

function MyPagination({ currentPage, totalPages }) {
  const { t } = useTranslation();
  const itemRender = (_, type) => {
    if (type === 'prev') {
      return <IconPrev />;
    }
    if (type === 'next') {
      return <IconNext />;
    }
    return <div />;
  };
  return (
    <div className="my-pagination display-flex paging-notice pt-20 justify-space-btwn">
      <Pagination itemRender={itemRender} />
      <div className="fz-13 page-title">
        {t('news.page')} {currentPage} / {totalPages}
      </div>
    </div>
  );
}
MyPagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
};
export default MyPagination;
