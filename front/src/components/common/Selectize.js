import Select from 'react-select'

const Selectize = ({ data }) => {

	const options = data.map(d => ({
		"value": d.id,
		"label": d.id + " " + d.company_name
	})
	)

	const getValue = (e) => {
		const selectedValue = e.value
		console.log(selectedValue)
	}


	return (
		<div>
			<Select options={options} onChange={getValue} />
		</div>
	)
}

export default Selectize
