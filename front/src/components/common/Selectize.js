import Select from 'react-select'

const Selectize = ({ data, onChange }) => {

	const options = data.map(d => ({
		"value": d.id,
		"label": d.id + " " + d.company_name
	})
	)

	return (
		<div>
			<Select options={options} onChange={onChange} />
		</div>
	)
}

export default Selectize
