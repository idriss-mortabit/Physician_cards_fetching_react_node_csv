import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {
   Badge, Button, UncontrolledAlert, Card, CardImg, CardBody,
   CardTitle, CardSubtitle, CardText,  Row, Col, CardDeck, CardColumns,
	Form, FormGroup, Input
} from 'reactstrap';
import PhysicianCard from './PhysicianCard';

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';
class Post extends Component {
     constructor(props) {
     	super(props);
     	this.state = {
     		physicians: [],
     		initialItems: [],
			physicianCount : 0
     	};
     	this.filterList = this.filterList.bind(this);
     }
     filterList(event) {
     	console.log('Inside -- filterList');
     	var updatedList = this.state.initialItems;
     	updatedList = updatedList.filter(function (item) {
     		return item.Physician_Full_Name.toLowerCase().search(
     			event.target.value.toLowerCase()) !== -1;
     	});
     	this.setState({
     		physicians: updatedList,
			physicianCount : updatedList.length

     	});
     }
  componentDidMount() {
    axios.get('/api/getphysicians')
      .then(response => {
						 console.log("Got Response--"+JSON.stringify(response.data));
						 console.log("physicians before set"+JSON.stringify(Object.values(response.data[0])));
						 this.setState({ initialItems : response.data,
										 physicianCount : response.data.length,
										 physicians : response.data })						 
						}
		   );
  }

	render() {
		return (
			<Fragment>
				{this.state.physicians && <div className="position-relative">
			 		<span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
				 		Filter
				 		<Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>New</Badge>
					</span>

					<Form>
						<FormGroup>

						</FormGroup>
					</Form>

					<Row form>
					  <Col md={6}>
						<FormGroup>
						  <Input  type="text" className="form-control form-control-lg" placeholder="Physician Name" onChange={this.filterList}/>
						</FormGroup>
					  </Col>
					</Row>
					<span className="d-block pb-4 h2 text-dark border-bottom border-gray">Physicians Around the US
			        	<Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>{ this.state.physicianCount }</Badge>
			    	</span>

					<Row>
						<CardColumns>
							{this.state.physicians.map(physician =>
								<PhysicianCard physician={physician} />
							)}
						</CardColumns>
					</Row>
				</div>
				}
			</Fragment>
    );
  }

}

export default Post;
