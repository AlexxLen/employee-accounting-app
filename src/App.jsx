import './style/main.css';

import Info from './components/Info';
import Search from './components/Search';
import Filter from './components/Filter';
import EmployesList from './components/EmployesList';
import AddForm from './components/AddForm';
import { useState } from 'react';

const items = [
	{ id: 1, name: 'Katherine Cole', salary: 2000, increase: true, favorite: false },
	{ id: 2, name: 'Gary Bridges', salary: 1500, increase: false, favorite: false },
	{ id: 3, name: 'Charles Williams', salary: 870, increase: true, favorite: true },
	{ id: 4, name: 'Karen Larson', salary: 3233, increase: false, favorite: true },
	{ id: 5, name: 'Julie Castillo', salary: 999, increase: true, favorite: false },
];

let maxId = 6;

const App = () => {
	const [data, setData] = useState(items);
	const [term, setTerm] = useState('');
	const [filter, setFilter] = useState('all');

	const addItem = (name, salary) => {
		const newItem = {
			id: maxId++,
			name: name,
			salary: salary,
			increase: false,
			favorite: false,
		};
		setData([...data, newItem]);
	};
	const deleteItem = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const onToogleProp = (id, prop) => {
		setData(data.map((item) => (item.id === id ? { ...item, [prop]: !item[prop] } : item)));
	};

	const searchEmp = (items, term) => {
		return items.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
	};

	const onUpdateSearch = (term) => {
		setTerm(term);
	};

	const filterPost = (items, filter) => {
		switch (filter) {
			case 'favorite':
				return items.filter((item) => item.favorite);
			case 'moreThen1000':
				return items.filter((item) => item.salary > 1000);
			default:
				return items;
		}
	};

	const onFilterSelect = (filter) => {
		setFilter(filter);
	};

	const amountEmployes = data.length;
	const amountIncreased = data.filter((item) => item.increase === true).length;
	const visibleData = filterPost(searchEmp(data, term), filter);

	return (
		<div className="app">
			<Info amountEmployes={amountEmployes} amountIncreased={amountIncreased} />
			<div className="search-panel">
				<Search onUpdateSearch={onUpdateSearch} />
				<Filter filter={filter} onFilterSelect={onFilterSelect} />
			</div>
			<EmployesList data={visibleData} onDelete={deleteItem} onToogleProp={onToogleProp} />
			<AddForm onAdd={addItem} />
		</div>
	);
};

export default App;
