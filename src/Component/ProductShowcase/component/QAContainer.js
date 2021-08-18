import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../css/qna.css";

function QnA(props) {
	const [counter, setcounter] = useState(0);

	return (
		<div className='d-flex flex-row'>
			<div
				className='d-flex flex-column item-center'
				style={{ borderRight: "0.3px solid #888888", padding: "0 1em " }}>
				<svg
					onClick={() => {
						setcounter(counter + 1);
					}}
					xmlns='http://www.w3.org/2000/svg'
					style={{
						margin: "0.2em ",
						transform: "rotate(180deg)",
					}}
					viewBox='7 10 10 3'>
					<path d='M 9 10 L 12 13 L 15 10 H 9 Z' fill='#888888' />
				</svg>
				<p className='m-0'>{props.voteCount + counter}</p>
				<p className='m-0'>votes</p>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					style={{ padding: "0.2em" }}
					onClick={() => {
						setcounter(counter - 1);
					}}
					viewBox='7 10 10 3'>
					<path d='M 9 10 L 12 13 L 15 10 H 9 Z' fill='#888888' />
				</svg>
			</div>
			<div className='qna_container' style={{ marginLeft: "1em" }}>
				<div className='q '>Question:</div>
				<div className='qcontent'>{props.question}</div>
				<div className='a'>Answer:</div>
				<div className='acontent'>{props.answer}</div>
			</div>
		</div>
	);
}

function QAContainer() {
	return (
		<div className='section '>
			<div className='qa_container'>
				<h2>Customer questions & answer</h2>
				<div className=' d-flex flex-row content-center question_input question  '>
					<SearchIcon className='bg-transparent' />
					<input
						className='question_input'
						type='text'
						placeholder='Have a Question? Search for answer '
					/>
				</div>
				<div>
					<ul className='question_list'>
						<li className='questions'>
							{" "}
							<QnA
								voteCount={0}
								question='Why they phone is costlier in Amazon comaparing to other shoppileng app like flipkart'
								answer='In Amazon these phone are imported verson but google sells pixel through fripcart in India 
By Rudrapratap Roy on 30 November, 2020'
							/>
						</li>
						<li className='questions'>
							{" "}
							<QnA
								voteCount={0}
								question='Is this supports jio and Bsnl networks ?? For pixel 4a'
								answer='Yes it dose'
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default QAContainer;
