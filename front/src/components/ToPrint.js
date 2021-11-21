import React from "react";
import ReactToPrint from "react-to-print";
import Barcode from "react-barcode";
import TextField from "@material-ui/core/TextField";
import logo from "../assets/images/logo.png";
import AxiosGet from "../axios/AxiosGet";

class ComponentToPrint extends React.Component {
  render() {
    //const startingValue = this.props.data.nextbox.nextbox;
    const startingValue = this.props.nextbox;//this.props.boxID;
    const boxes = this.props.boxes;

    const components = [];
    for (
      let j = startingValue;
      j < startingValue + parseInt(this.props.topicBox);
      j++
    ) {
      components.push(Barcode);
    }
    const componentsToRender = components.map((Component, i) => (
      <div className="with-logo">
        <div className="logo-div">
          <img src={logo} alt="Logo" className="logo-barcode" />
        </div>
        <div className="logo-text">
            <ul><li>Dokumentu glabāšana</li><li>Arhivēšana</li></ul>
          </div>
        <div className="id-div">
          <h3 className="client-id">{this.props.clientID}</h3>
        </div>
        <div className="barcode">
          <Component
            width={4}
            height={50}
            fontSize={32}
            key={i + startingValue}
            value={i + startingValue}
          />
        </div>
      </div>
    ));

    return <div className="barcode-container">{componentsToRender}</div>;
  }
}

class ToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicBox: this.props.topicBox,
      nextbox: this.props.nextbox
      //boxID : this.props.boxID,
      //boxes : []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange ({ target }) {
        
    //let boxes = AxiosGet("getinfo", {
    //  boxID : this.props.boxID,
    //  box_count:target.value
    //});     
  
    this.setState({
      [target.name]: target.value,
      //boxes: boxes
    });
    //this.props.onChange(target.value);
  }



  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint
          ref={(el) => (this.componentRef = el)}
          data={this.state}
          clientID={this.props.clientID}
          nextbox={this.props.nextbox}
          topicBox={this.props.topicBox}
          //boxID={this.props.boxID}
          //boxes={this.state.boxes}
        />
      </div>
    );
  }
}

export default ToPrint;
