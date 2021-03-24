import Select from 'react-select'

const Selectize = ( {data} ) => {

    const options = data.map(d => ({
        "value" : d.id,
        "label" : d.id + " " + d.company_name
      })
    )

  return (
    <div>
        <Select options={options} />
    </div>
  )
}

export default Selectize