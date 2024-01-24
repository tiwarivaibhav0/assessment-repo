import React from "react";
import {
	briefCaseIcon,
	calendarIcon,
	candidatesIcon,
	hamburgerIcon,
	linkIcon,
	plusIcon,
	sectionDivider,
	shareIcon,
	totalAssessment,
	verticalDivider,
	worldIcon,
} from "../assets/svg";

const Container = ({ toggleMenu, setFormOpen, formOpen }) => {
	return (
		<div className={`hero`}>
			<button onClick={toggleMenu} id="hamburger">
				{hamburgerIcon}
			</button>
			<div className="v-flex v-flex-column v-flex-afs">
				<div className="header v-flex v-flex-column v-flex-afs g-24 ">
					<div className="header-content v-flex v-flex-ac v-flex-ass">
						<div className="v-flex v-flex-ac g-20 v-flex-ass">
							<h4>Assessment</h4>
							{verticalDivider}
							<div className="v-flex v-flex-afs g-20">
								<div className="header-tab-content v-flex v-flex-ac g-10">
									<p>My Assesments</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="main-content v-flex v-flex-column v-flex-afs g-24 v-flex-ass">
					<div className="v-flex v-flex-column v-flex-afs g-40 v-flex-ass">
						<div className="v-flex v-flex-column v-flex-afs g-24 v-flex-ass">
							<div className="main-content-topbar v-flex v-flex-column v-flex-afs g-1">
								<p>Assessments Overview</p>
								<div className="main-content-topbar-info v-flex v-flex-afs g-1">
									<div className="assessment-details v-flex v-flex-column v-flex-afs g-16">
										<p>Total Assessment</p>
										<div className="assessment-details-data v-flex v-flex-ac g-10">
											<div className="assessment-details-data-icon v-flex v-flex-ac">
												{totalAssessment}
											</div>
											<p>34</p>
										</div>
									</div>
									<div>{sectionDivider}</div>
									<div className="candidate-details v-flex v-flex-column v-flex-afs g-16">
										<p>Candidates</p>
										<div className="candidate-details-data v-flex v-flex-ac g-20">
											{candidatesIcon}
											<div className="candidate-details-data-details v-flex v-flex-column v-flex-afs g-1">
												<div className="candidate-details-data-details-container v-flex v-flex-ac g-4">
													<p>11,145</p>
													<span>+89</span>
												</div>

												<p>Total Candidate</p>
											</div>
											{sectionDivider}
											<div className="candidate-details-data-details2 v-flex v-flex-column v-flex-afs g-1">
												<div className="candidate-details-data-details2-container v-flex v-flex-ac g-4">
													<p>1,14</p>
													<span>+89</span>
												</div>
												<p>Who Attempted</p>
											</div>
										</div>
									</div>
									<div>{sectionDivider}</div>
									<div className="candidate-source v-flex v-flex-column v-flex-afs g-16 v-flex-ass">
										<p>Candidates Source</p>
										<div className="v-flex v-flex-ac g-20">
											<span id="world-icon">{worldIcon}</span>
											<div className="candidate-source-data-content1 v-flex v-flex-column v-flex-afs g-1">
												<div className="candidate-source-data-content1-text v-flex v-flex-ac g-4">
													<h6>11,000</h6>
													<p>+89</p>
												</div>
												<p>E-mail</p>
											</div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="2"
												height="40"
												viewBox="0 0 2 40"
												fill="none"
											>
												<path d="M1 0V40" stroke="#DADCE0" />
											</svg>
											<div className="candidate-source-data-content2 v-flex v-flex-column v-flex-afs g-1">
												<div className="candidate-source-data-content1-text v-flex v-flex-ac g-4">
													<h6>145</h6>
													<p>+89</p>
												</div>

												<p>Social Share</p>
											</div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="2"
												height="40"
												viewBox="0 0 2 40"
												fill="none"
											>
												<path d="M1 0V40" stroke="#DADCE0" />
											</svg>
											<div className="candidate-source-data-content2 v-flex v-flex-column v-flex-afs g-1">
												<div className="candidate-source-data-content1-text v-flex v-flex-ac g-4">
													<h6>145</h6>
													<p>+89</p>
												</div>

												<p>Unique Link</p>
											</div>
										</div>
									</div>
									<div>{sectionDivider}</div>
									<div className="purpose-details v-flex v-flex-column v-flex-afs g-16 c-flex-ass">
										<p>Total Purpose</p>
										<div className="assessment-details-data v-flex g-10 v-flex-ac">
											<div className="">{linkIcon}</div>
											<p>11</p>
										</div>
									</div>
								</div>
							</div>
							<div className="v-flex v-flex-column v-flex-afs g-16">
								<div className="main-content-bottom-child1 v-flex">
									<p>My Assessment</p>
								</div>
								<div className=" v-flex v-flex-column v-flex-afs g-30">
									<div className="v-flex v-flex-afs g-30 main-content-bottom">
										<div className="new-assessment v-flex v-flex-column v-flex-ac g-12">
											<div className="new-assessment-data1 v-flex v-flex-column v-flex-ac g-10">
												<div
													className="new-assessment-data1-icon v-flex v-flex-ac g-10"
													onClick={() => setFormOpen((open) => !open)}
												>
													{plusIcon}
												</div>
												<p>New Assessment</p>
											</div>
											<p>
												From here you can add questions of multiple types like
												MCQs, subjective (text or paragraph)!
											</p>
										</div>
										<div className="bottom-container-child2 v-flex v-flex-column v-flex-afs g-16">
											<div className="bottom-container-child2-data1 v-flex v-flex-afs">
												<div className="bottom-container-child2-data1-left v-flex v-flex-column v-flex-afs g-10">
													<div>{briefCaseIcon}</div>
													<div className="child2-data1-left-text-container v-flex v-flex-column v-flex-afs g-2">
														<h5>Math Assessment</h5>
														<div className="v-flex v-flex-ac g-10">
															<p>Job</p>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="2"
																height="16"
																viewBox="0 0 2 16"
																fill="none"
															>
																<path d="M1 0V16" stroke="#DADCE0" />
															</svg>
															<div className="v-flex v-flex-ac g-4">
																{calendarIcon}
																<p>20 Apr 2023</p>
															</div>
														</div>
													</div>
												</div>
												<div className="bottom-container-child2-data1-right v-flex v-flex-ac g-10">
													<div class="three-dots">
														<div class="dot"></div>
														<div class="dot"></div>
														<div class="dot"></div>
													</div>
												</div>
											</div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="356"
												height="2"
												viewBox="0 0 356 2"
												fill="none"
											>
												<path
													d="M0 1H356"
													stroke="#DADCE0"
													stroke-dasharray="3 3"
												/>
											</svg>
											<div className="bottom-container-child2-data2 v-flex v-flex-ac">
												<div className="bottom-container-child2-data2-left v-flex v-flex-afs g-14">
													<div className="v-flex v-flex-column v-flex-afs">
														<h6>00</h6>
														<p>Duration</p>
													</div>
													<div className="v-flex v-flex-column v-flex-afs">
														<h6>00</h6>
														<p>Questions</p>
													</div>
												</div>
												<div className="bottom-container-child2-data2-right v-flex v-flex-ac g-10">
													<div className="share-icon-container v-flex v-flex-ac g-4">
														{shareIcon}
														<p>Share</p>
													</div>
													<div className="thumbnail-container v-flex v-flex-ac g-4">
														<div className="v-flex v-flex-column g-10">
															<p>P</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="bottom-container-child2 v-flex v-flex-column v-flex-afs g-16">
											<div className="bottom-container-child2-data1 v-flex v-flex-afs">
												<div className="bottom-container-child2-data1-left v-flex v-flex-column v-flex-afs g-10">
													<div>{briefCaseIcon}</div>
													<div className="child2-data1-left-text-container v-flex v-flex-column v-flex-afs g-2">
														<h5>Math Assessment</h5>
														<div className="v-flex v-flex-ac g-10">
															<p>Job</p>
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width="2"
																height="16"
																viewBox="0 0 2 16"
																fill="none"
															>
																<path d="M1 0V16" stroke="#DADCE0" />
															</svg>
															<div className="v-flex v-flex-ac g-4">
																{calendarIcon}
																<p>20 Apr 2023</p>
															</div>
														</div>
													</div>
												</div>
												<div className="bottom-container-child2-data1-right v-flex v-flex-ac">
													<div class="three-dots">
														<div class="dot"></div>
														<div class="dot"></div>
														<div class="dot"></div>
													</div>
												</div>
											</div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="356"
												height="2"
												viewBox="0 0 356 2"
												fill="none"
											>
												<path
													d="M0 1H356"
													stroke="#DADCE0"
													stroke-dasharray="3 3"
												/>
											</svg>
											<div className="bottom-container-child2-data2 v-flex v-flex-ac">
												<div className="bottom-container-child2-data2-left v-flex v-flex-afs g-14">
													<div className="v-flex v-flex-column v-flex-afs ">
														<h6>00</h6>
														<p>Duration</p>
													</div>
													<div className="v-flex v-flex-column v-flex-afs ">
														<h6>00</h6>
														<p>Questions</p>
													</div>
												</div>
												<div className="v-flex v-flex-ac g-10">
													<div className="share-icon-container v-flex v-flex-ac g-4">
														{shareIcon}
														<p>Share</p>
													</div>
													<div className="thumbnail-container2 v-flex v-flex-ac g-4">
														<div className="v-flex v-flex-ac">
															<div className="v-flex v-flex-column g-10">
																<p>LP</p>
															</div>
															<div className="ml-20 v-flex v-flex-column g-10">
																<p>LP</p>
															</div>
															<div className="ml-20 v-flex v-flex-column g-10 " id="bg-pink">
																<p>LP</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Container;
