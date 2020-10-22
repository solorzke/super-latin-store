import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { TabAccordian, ServiceTabs } from './Accordian';

export class ServiceBars extends Component {
	constructor(props) {
		super(props);
		this.state = {
			adjust: false,
			seconds: 0,
			progress: 0,
			key: 'first'
		};
	}

	componentDidMount() {
		this.setProgressInterval();
		this.handleResize();
		window.addEventListener('resize', this.handleResize());
	}

	componentDidUpdate() {
		this.handleResize();
		window.addEventListener('resize', this.handleResize());
	}

	setKey(id) {
		this.setState({
			key: id
		});
	}

	/* Handle resizing of window with the state */
	handleResize() {
		switch (window.innerWidth < 415) {
			case true:
				if (!this.state.adjust)
					this.setState({ adjust: true }, () => console.log('adjust: ' + this.state.adjust));
				return;
			case false:
				if (this.state.adjust)
					this.setState({ adjust: false }, () => console.log('adjust: ' + this.state.adjust));
				return;
		}
	}

	/* Set the interval timer for every .5 sec to update the state progress. 
       If 5 seconds has concluded, reset the seconds and progress in the state and change to the next key sequence order 
    */
	setProgressInterval() {
		this.intervalId = setInterval(() => {
			this.setState(
				(prevState) => ({
					seconds: (prevState.seconds += 0.5),
					progress: (prevState.progress += 10)
				}),
				() => {
					if (this.state.seconds === 5) {
						// clearInterval(this.intervalId);
						this.resetProgress();
						this.updateKey();
					}
				}
			);
		}, 500);
	}

	/* Stop the interval timer when the service item is clicked */
	stopInterval() {
		clearInterval(this.intervalId);
		this.setState({
			progress: 100,
			seconds: 0
		});
		console.log('Interval timer is cleared');
	}

	/* Reset the progress of the progress bar and seconds after the interval passes its 5th second */
	resetProgress() {
		this.setState(
			{
				seconds: 0,
				progress: 0
			},
			() => console.log(`Progress Reset: ${this.state.progress} Seconds Reset: ${this.state.seconds}`)
		);
	}

	/* Set the next sequence key of the service items */
	updateKey() {
		let sequence = null;
		switch (this.state.key) {
			case 'first':
				sequence = 'second';
				break;
			case 'second':
				sequence = 'third';
				break;
			case 'third':
				sequence = 'first';
				break;
		}
		this.setState(
			{
				key: sequence
			},
			() => console.log(`Key updated. Current: ${this.state.key}`)
		);
	}

	render() {
		return (
			<Fade left>
				<div className="tabs">
					<Container>
						<Row>
							<div
								className={`col-md-12 d-flex flex-column align-items-center justify-content-center ${this
									.props.name}`}
							>
								<i className="fas fa-bullseye" style={{ fontSize: 35 }} />
								<h6 className="banner-title">{this.props.label.subtitle}</h6>
								<h1 className="banner-title">{this.props.label.title}</h1>
								<div style={{ width: '100%', border: '1px solid #e8e8e8', marginBottom: 10 }} />
								<br />
								{!this.state.adjust && (
									<ServiceTabs
										data={this.props.data}
										state={this.state}
										setKey={this.setKey.bind(this)}
										stopInterval={this.stopInterval.bind(this)}
									/>
								)}
								{this.state.adjust && (
									<TabAccordian
										data={this.props.data}
										state={this.state}
										setKey={this.setKey.bind(this)}
										stopInterval={this.stopInterval.bind(this)}
									/>
								)}
							</div>
						</Row>
					</Container>
				</div>
			</Fade>
		);
	}
}
