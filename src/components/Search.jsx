import { useState } from 'react';
const Search = ({ onUpdateSearch }) => {
	const [term, setTerm] = useState('');

	const onChangeSearch = (value) => {
		setTerm(value);
		onUpdateSearch(value);
	};

	return (
		<div>
			<input
				onChange={(e) => onChangeSearch(e.target.value)}
				type="text"
				className="form-control search-input"
				placeholder="Найти сотрудника"
				value={term}
			/>
		</div>
	);
};

export default Search;
