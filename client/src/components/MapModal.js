import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import Geocode from "react-geocode";
import Map from './Map';


class MapModal extends React.Component {
	constructor(props) {
		super(props);
		console.log("Hello from Map Modal");
		this.state = {
			modal: false
		};
		
		this.toggle = this.toggle.bind(this);


	}
	componentDidMount() {
		// Geocode.setApiKey("2230344e87193a");
		// Geocode.enableDebug();
		// Geocode.fromAddress("300 PASTEUR DR H3680A").then(
		// 	response => {
		// 		console.log("ha lat w lng")
		// 		this.setState({
		// 			lat: response.results[0].geometry.location.latitude,
		// 			lng: response.results[0].geometry.location.longitude
		// 	})
		// },
		// 	error => {
		// 		console.error(error);
		// }
		// );
	}
	toggle() {
			this.setState({
				modal: !this.state.modal
			});
    }

  render() {
    return (
      <div>
        <Button color="info" className="font-weight-bold btn float-right" onClick={this.toggle}><i className="fa fa-location-arrow" aria-hidden="true"></i> Address </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.physician["Physician_Profile_ID"]}>
          <ModalHeader toggle={this.toggle} >Location </ModalHeader>
          <ModalBody>
		  <Row className="clearfix">
			<Col>
				Address:
				<address> {this.props.physician.Recipient_Primary_Business_Street_Address_Line1}</address>
			</Col>
		  </Row>
			  <Map
                    app_id="0etNHVQpVlYq19ZIMA8r"
                    app_code="GnTQW_LcBFER-c7EX-0b3g"
                    // lat={this.state.lat}
										// lng={this.state.lng}
										street={this.props.physician["Recipient_Primary_Business_Street_Address_Line1"]}
										city={this.props.physician["Recipient_City"]}
										state={this.props.physician["Recipient_State"]}
										postalCode={this.props.physician["Recipient_Zip_Code"]}
										country={this.props.physician["Recipient_Country"]}
										//address={this.props.physician["Recipient_Primary_Business_Street_Address_Line1"]}
                    zoom="12"
                />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MapModal;
