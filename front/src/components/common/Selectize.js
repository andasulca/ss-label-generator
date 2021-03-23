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

// import axios from 'axios'
// import React, { Component } from 'react'

// export default class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       selectOptions : [],
//       id: "",
//       company_name: ''
//     }
//   }

//  async getOptions(){
//     const res = await axios.get('http://localhost:5000/get/clients')
//     const data = res.data

//     const options = data.map(d => ({
//       "value" : d.id,
//       "label" : d.company_name

//     }))

//     this.setState({selectOptions: options})

//   }

//   handleChange(e){
//    this.setState({id:e.value, name:e.label})
//   }

//   componentDidMount(){
//       this.getOptions()
//   }

//   render() {
//     console.log(this.state.selectOptions)
//     return (
//       <div>
//         <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
//         <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
//       </div>
//     )
//   }
// }