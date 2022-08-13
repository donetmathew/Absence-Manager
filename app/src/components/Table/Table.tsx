import React, { useMemo } from 'react';
import './Table.scss';

export const Table = (props: any) => {
    console.log(props);
    const columns = useMemo(() => props.columns, []);
    const data = useMemo(() => props.data, []);

    return (
        <div className='container'>
            <ul className="responsive-table">
                <li className="table-header">
                    {columns.map((el: any, index: number) => {
                        return <div className={`col col-${(index + 1)}`} key={el?.fieldId}>{el?.header}</div>
                    })}
                </li>
                {
                    data.map((el: any,ind:number) => {
                        return (
                            <li key={`${ind}`} className='table-row'>
                                {
                                    columns.map((data: any, index: number) => {
                                        return <div className={`col col-${index + 1}`} key={`${ind}-${index}`} data-label={data?.header}>{el[data?.fieldId]}</div>
                                    })
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Table;

