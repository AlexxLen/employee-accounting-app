import EmployesListItem from './EmployesListItem';

const EmployesList = ({ data, onDelete, onToogleProp }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToogleProp={(e) => onToogleProp(id, e.currentTarget.getAttribute('data-toggle'))}
			/>
		);
	});

	return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployesList;
