
const Paginator = (props) =>
{
	let pageCount = Math.ceil(props.totalCount / props.pageSize);
	let pages = [];
	for(let i = 1; i <= pageCount; i++)
	{
		pages.push(i);
	}

	return(
		<div>
		{/*
			pages.map(page => {
			return <span className={page === props.currentPage && styleClasses.selectedPage} onClick={() => props.selectPage(page)}> {page} </span>
		})
		*/}
		</div>
	)
}

export default Paginator;