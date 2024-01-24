import React from "react";
import { closeIcon, closeLabel, cursorDownIcon } from "../assets/svg";

const Form = ({ setFormOpen }) => {
	return (
		<div className="dimmed">
			<div className="form v-flex v-flex-column v-flex-afs">
				<div className="form-child1 v-flex v-flex-ac">
					<p>Create new assessment</p>
					<div onClick={() => setFormOpen(false)}>{closeIcon}</div>
				</div>
				<div className="form-child2 v-flex v-flex-column v-flex-afs g-20">
					<div className="v-flex v-flex-column v-flex-afs v-flex-ass g-10">
						<div className="v-flex v-flex-column v-flex-afs v-flex-ass g-4">
							<p>Name of assessment</p>
						</div>
						<div className="form-input v-flex v-flex-ac g-10 v-flex-ass">
							<p>Type Here</p>
						</div>
					</div>
					<div className="v-flex v-flex-column v-flex-afs v-flex-ass g-10">
						<div className="v-flex v-flex-column v-flex-afs v-flex-ass g-4">
							<p>Purpose of the test is</p>
						</div>
						<div className="form-select v-flex v-flex-ac v-flex-ass">
							<p>Select</p>
							{cursorDownIcon}
						</div>
					</div>
					<div className="v-flex v-flex-column v-flex-afs v-flex-ass g-10">
						<div className="v-flex v-flex-column v-flex-afs v-flex-ass g-4">
							<p>Description</p>
						</div>
						<div className="form-select v-flex v-flex-ac v-flex-ass">
							<p>Select</p>
							{cursorDownIcon}
						</div>
					</div>
					<div className="v-flex v-flex-column v-flex-afs v-flex-ass g-10">
						<div className="v-flex v-flex-column v-flex-afs v-flex-ass g-4">
							<p>Skills</p>
						</div>
						<div className="form-label v-flex v-flex-column v-flex-afs v-flex-ass">
							<div className="form-label-container v-flex  v-flex-afs v-flex-ass g-10 ">
								{Array(5)
									.fill(0)
									.map(() => (
										<div className="form-clickable v-flex v-flex-ac g-2">
											<div className="v-flex v-flex-ac g-5">
												<p>UI/UX and Design</p>
												{closeLabel}
											</div>
										</div>
									))}
							</div>
							<div className="form-input v-flex v-flex-column v-flex-afs v-flex-ass g-10">
								<p>Type here</p>
							</div>
						</div>
					</div>
					<div className=" v-flex v-flex-column v-flex-afs v-flex-ass g-10">
						<div className="v-flex v-flex-column v-flex-afs v-flex-ass g-4">
							<p>Duration of assessment</p>
						</div>
						<div className="form-duration v-flex v-flex-ac v-flex-ass">
							<p>HH:MM:SS</p>
						</div>
					</div>
				</div>
				<div className="form-child3 v-flex v-flex-column v-flex-afs v-flex-ass g-20">
					<button className="v-flex v-flex-ac g-4 v-flex-ass">Save</button>
				</div>
			</div>
		</div>
	);
};

export default Form;
