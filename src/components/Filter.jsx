const buttonsData = [
	{ name: 'all', label: 'Все сотрудники' },
	{ name: 'favorite', label: 'На повышение' },
	{ name: 'moreThen1000', label: 'З/П больше 1000$' },
];

const Filter = ({ filter, onFilterSelect }) => {
	const buttons = buttonsData.map(({ name, label }) => {
		const active = filter === name;
		const className = active ? 'btn-light' : 'btn btn-outline-light';
		return (
			<button
				className={`btn ${className}`}
				type="button"
				key={name}
				onClick={() => onFilterSelect(name)}>
				{label}
			</button>
		);
	});

	return (
		<div>
			<div className="btn-group">{buttons}</div>
		</div>
	);
};

export default Filter;
