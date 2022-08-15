import React, { useState } from 'react';
import { absencesType, TableHeaders } from '../../model/absences.model';
import { Modal } from '../Modal/Modal';
import ReactPaginate from 'react-paginate';
import './Table.scss';

export const Table: React.FC<{
    columns: TableHeaders[], data: absencesType[]
}> = ({ columns, data }) => {
    const [openModal, setOpenModal] = useState<Boolean>(false);
    const [selectedRow, setSelectedRow] = useState<absencesType | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const usersPerPage: number = 10;
    const pagesVisited: number = pageNumber + usersPerPage;
    const pageCount = Math.ceil(data?.length / usersPerPage);

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    }

    const handleClick = (row: any) => {
        setSelectedRow(row);
        setOpenModal(true);
    }

    return (
        <div className='container'>
            <ul className="responsive-table">
                <li className="table-header">
                    {columns.map((el: any, index: number) => {
                        return <div className={`col col-${(index + 1)}`} key={el?.fieldId}>{el?.header ? el?.header : ""}</div>
                    })}
                </li>
                {
                    data.slice(pagesVisited, pagesVisited + usersPerPage).map((el: any, ind: number) => {
                        return (
                            <li key={`${ind}`} className='table-row'>
                                {
                                    columns.map((data: any, index: number) => {
                                        return data?.link
                                            ? <a className={`col col-${index + 1} table-link`} key={`${ind}-${index}`} onClick={() => { handleClick(el) }}>{data?.fieldId}</a>
                                            : <div className={`col col-${index + 1}`} key={`${ind}-${index}`} data-label={data?.header}>{el[data?.fieldId]}</div>
                                    })
                                }
                            </li>
                        )
                    })
                }
            </ul>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                breakLabel="..."
                breakClassName="break-me"
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                breakLinkClassName="page-link"
                containerClassName="pagination"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
            />

            {openModal && <Modal row={selectedRow} closeModal={setOpenModal} />}
        </div>
    )
}

export default Table;

