import { useState } from 'react';

const AddForm = ({ onAdd }) => {
	const [name, setName] = useState('');
	const [salary, setSalary] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (name.length >= 3 && salary.length > 0) {
			onAdd(name, salary);
			setName('');
			setSalary('');
		}
	};

	return (
		<div className="app-add-form">
			<h3>Добавление нового сотрудника</h3>
			<form className="add-form d-flex" onSubmit={(e) => onSubmit(e)}>
				<input
					onChange={(e) => setName(e.target.value)}
					type="text"
					className="form-control new-post-label"
					placeholder="Как его зовут?"
					name="name"
					value={name}
				/>
				<input
					onChange={(e) => setSalary(e.target.value)}
					type="number"
					className="form-control new-post-label"
					placeholder="З/П в $?"
					name="salary"
					value={salary}
				/>
				<button type="submit" className="btn btn-outline-light">
					Добавить
				</button>
			</form>
		</div>
	);
};

export default AddForm;
