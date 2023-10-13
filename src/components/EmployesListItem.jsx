const EmployesListItem = (props) => {
	const { name, salary, onDelete, onToogleProp, increase, favorite } = props;

	let classNames = 'list-group-item d-flex justify-content-between';

	if (increase) {
		classNames += ' increase';
	}
	if (favorite) {
		classNames += ' like';
	}
	return (
		<li className={classNames}>
			<span onClick={onToogleProp} className="list-group-item-label" data-toggle="favorite">
				{name}
			</span>
			<input
				type="text"
				className="list-group-item-input"
				s
				value={salary + '$'}
				defaultValue={1000 + '$'}
			/>
			<div className="d-flex justify-content-center align-items-center">
				<button className="btn-cookie" onClick={onToogleProp} data-toggle="increase">
					<i className="fas fa-cookie"></i>
				</button>
				<button className="btn-trash fa-sm" onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
};

export default EmployesListItem;
