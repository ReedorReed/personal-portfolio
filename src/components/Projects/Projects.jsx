import React from 'react';
import './Projects.sass';
import ticTacToe from '../../assets/tic-tac-toe.png';

export default function Projects() {
	return (
		<section id="projects" className="projects">
			<h1 className="hero__title">Projects</h1>
			<div className="hero__styles-projects-container">
				<a
					href="https://github.com/rts-cmk/tic-tac-toe-ReedorReed"
					target="_blank">
					<img className="hover" src={ticTacToe} alt="ticTacToe image" />
					<h3>Tic Tac Toe</h3>
					<p>Fun little game</p>
				</a>
			</div>
		</section>
	);
}
