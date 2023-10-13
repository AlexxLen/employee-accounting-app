const Info = ({ amountEmployes, amountIncreased }) => (
	<div className="app-info">
		<h1>Учет сотрудников</h1>
		<h2>Общее число сотрудников: {amountEmployes}</h2>
		<h2>Премию получат: {amountIncreased} </h2>
	</div>
);

export default Info;
