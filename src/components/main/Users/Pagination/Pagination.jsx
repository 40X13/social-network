import {NavLink, useLocation} from "react-router-dom";

import styles from './Pagination.module.css';
import queryString from "query-string";
import {useEffect, useState} from "react";

const Pagination = ({usersTotalCount, queryParams, setCurrentPageAC}) => {

    const location = useLocation();
    const parsed = queryString.parse(location.search);

    useEffect(() => {
        if (parsed.page) {
            setCurrentPageAC(parsed.page)
            setCurrentPage(+parsed.page)
        }
        return () => setCurrentPageAC(1);
    }, [parsed.page]);

    const pagesCount = Math.ceil(usersTotalCount / queryParams.count)
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [currentPage, setCurrentPage] = useState(+parsed.page || 1);
    const [portionSize, setportionSize] = useState(5);

    const lastContentIndex = currentPage < portionSize / 2 + 1 ?
        portionSize
        :
        (currentPage + (portionSize - 1) / 2);
    const firstContentIndex =
        (pagesCount - currentPage < ((portionSize - 1) / 2)) ?
            pagesCount - portionSize
            :
            (lastContentIndex - portionSize) < 0 ? 0 : lastContentIndex - (portionSize);

    return (
        <div className={styles.pagination}>
            {currentPage > 1 && <NavLink
                to={`?page=${currentPage - 1}`}>
                &larr;
            </NavLink>}

            {pages
                .slice(firstContentIndex, lastContentIndex)
                .map(p => {
                    return <NavLink to={`?page=${p}`}
                                    key={p} className={p === +parsed.page ? styles.active : ''}
                    >{p}</NavLink>
                })}

            {currentPage < pagesCount && <NavLink
                to={`?page=${currentPage + 1}`}>
                &rarr;
            </NavLink>}

        </div>
    )

}

export default Pagination;




























