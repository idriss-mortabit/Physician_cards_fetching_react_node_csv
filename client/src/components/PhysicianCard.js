import React, { Fragment } from 'react';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, CardFooter
} from 'reactstrap';
import MapModal from './MapModal';

const PhysicianCard = ({physician}) => (
  <Fragment>
	<Card>
		<CardBody>
			<CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">{physician["Physician_Full_Name"]}</CardTitle>
			<CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>{physician["Physician_Primary_Type"]+" "+physician["Physician_Specialty"]}</CardSubtitle>
			<CardText className="text-secondary" >Address line1 : {physician["Recipient_Primary_Business_Street_Address_Line1"]} </CardText>
			<CardText className="text-secondary" >Recipient City :{physician["Recipient_City"]}</CardText>
			<CardText className="text-secondary" >Recipient State :{physician["Recipient_State"]}</CardText>
			<CardText className="text-secondary" >Recipient Zip_Code :{physician["Recipient_Zip_Code"]}</CardText>
			<CardText className="text-secondary" >Recipient Country :{physician["Recipient_Country"]}</CardText>
			<MapModal physician={physician}/>
		</CardBody>
	</Card>

  </Fragment>
);

export default PhysicianCard;


