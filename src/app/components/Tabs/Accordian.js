import React from 'react';
import { Accordion, Card, ProgressBar, Row, Col, Tab, Nav } from 'react-bootstrap';

export const TabAccordian = ({ data, state, stopInterval, setKey }) => {
	return (
		<Accordion activeKey={state.key}>
			<TabItems data={data} state={state} stopInterval={stopInterval} setKey={setKey} />
		</Accordion>
	);
};

export const TabItems = ({ data, state, stopInterval, setKey }) => {
	return data.map((item, index) => {
		return (
			<Card key={index}>
				<Card.Header style={{ padding: 5, color: item.sequence === state.key ? '#7392B7' : '#878E88' }}>
					<Accordion.Toggle
						as={'div'}
						eventKey={item.sequence}
						onClick={() => {
							stopInterval();
							setKey(item.sequence);
						}}
					>
						<i className={item.icon} />
						<h4>{item.service}</h4>
						<p style={{ fontSize: state.adjust ? 12 : 16 }}>{item.subtitle}</p>
						{state.key === item.sequence && (
							<div>
								<ProgressBar style={{ height: 5 }} variant="primary" now={state.progress} />
								<hr />
							</div>
						)}
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey={item.sequence}>
					<Card.Body>
						<p>{item.description}</p>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		);
	});
};

export const Links = ({ data, state, stopInterval, setKey }) => {
	return data.map((item, index) => {
		return (
			<Nav.Item key={index}>
				<Nav.Link
					eventKey={item.sequence}
					style={{ padding: 5, color: item.sequence === state.key ? '#7392B7' : '#878E88' }}
					onSelect={() => {
						stopInterval();
						setKey(item.sequence);
					}}
				>
					<i className={item.icon} />
					<h4>{item.service}</h4>
					<p>{item.subtitle}</p>
					{state.key === item.sequence && (
						<div>
							<ProgressBar style={{ height: 5 }} variant="primary" now={state.progress} />
							<hr />
						</div>
					)}
				</Nav.Link>
			</Nav.Item>
		);
	});
};

export const Content = ({ data }) => {
	return data.map((item, index) => {
		return (
			<Tab.Pane key={index} eventKey={item.sequence}>
				<p>{item.description}</p>
			</Tab.Pane>
		);
	});
};

export const ServiceTabs = ({ data, state, stopInterval, setKey }) => {
	return (
		<Tab.Container activeKey={state.key}>
			<Row>
				<Col>
					<Nav className="flex-column">
						<Links data={data} state={state} stopInterval={stopInterval} setKey={setKey} />
					</Nav>
				</Col>
				<Col>
					<Tab.Content>
						<Content data={data} />
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	);
};
