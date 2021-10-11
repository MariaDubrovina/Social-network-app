import classes from './Pagination.module.css';
import React from 'react';
import { Pagination } from 'antd';

const AppPagination = (props) => {

    function showTotal(total) {
        return `Total ${total} items`;
      }

    return <Pagination
      //size="small"
      total={props.totalUsersCount}
      showTotal={showTotal}
      showQuickJumper
      showSizeChanger={false}
      current={props.currentPage}
      onChange={props.onPageChanged}
    />

   // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

   // let pages = [];
  //  for (let i = 1; i <= pageCount; i++) {
  //      pages.push(i);
  //  }

  //  return <div>
   //         {pages.map((page) => {
    //            return <span onClick={(e) => { props.onPageChanged(page) }} className={props.currentPage === page && classes.selectedPage}>{page}</span>
   //         })}
   //     </div>
    
}



export default AppPagination;