import {useMemo, useState} from "react";
import style from "./Paginator.module.css";

const Paginator = ({currentPage, totalItemsCount, pageSize, portionSize= 10, onPageChanged}) =>
{
	let pageCount = useMemo(() => Math.ceil(totalItemsCount / pageSize),[totalItemsCount, pageSize]);
	let portionChangeThreshold = useMemo(() => Math.ceil(portionSize/2) - 1, [portionSize]);
	let leftPortionBorder = useMemo(() => {
		if (currentPage - portionChangeThreshold >= 1 && currentPage + portionChangeThreshold + 1 <= pageCount)
		{
			return currentPage - portionChangeThreshold;
		}
		else if (currentPage - portionChangeThreshold < 1)
		{
			return 1;
		}
		else if (currentPage + portionChangeThreshold + 1 > pageCount)
		{
			return pageCount - (portionSize - 1);
		}
	}, [currentPage]);


	let pages = [];
	for(let i = 1; i <= pageCount; i++)
	{
		pages.push(i);
	}

	const toFirstPage = () =>
	{
		onPageChanged(1);
	}
	const toLastPage = () =>
	{
		onPageChanged(pageCount);
	}
	const toNextPage = () => 
	{
		onPageChanged(currentPage + 1);
	}
	const toPreviousPage = () =>
	{
		onPageChanged(currentPage - 1);
	}

	return(
		<div className={style.paginatorBody}>
			{leftPortionBorder > 1 && <button onClick={toFirstPage}>First</button>}
			<button disabled={currentPage === 1} onClick={toPreviousPage}>←</button>
			{
				pages.filter(page => page >= leftPortionBorder && page <= leftPortionBorder + portionSize - 1)
				.map(page => {
					return <span key={page} className={`${style.pageNumber} ${page === currentPage ? style.selectedPage : ""}`} onClick={() => onPageChanged(page)}>{page}</span>
				})
			}
			<button disabled={currentPage === pageCount} onClick={toNextPage}>→</button>
			{leftPortionBorder + portionSize - 1 < pageCount && <><button onClick={toLastPage}>Last</button></>}
		</div>
	)
}

export default Paginator;