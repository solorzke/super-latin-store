import React from 'react';
import { Modal } from 'react-bootstrap';
import QR from '../../images/qrcode.png';
import Button from '../Button/Button';

const ModalImage = (props) => {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">QR Code</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="img-modal">
					<img src={QR} height="100%" width="50%" alt="www.superlatinstore.com" />
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide} label="Close" />
			</Modal.Footer>
		</Modal>
	);
};

export default ModalImage;
