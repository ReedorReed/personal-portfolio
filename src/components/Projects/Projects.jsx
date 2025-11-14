import React from 'react';
import './Projects.sass';
import ticTacToe from '../../assets/tic-tac-toe.png';
import ProjectCard from './ProjectCard';

export default function Projects() {
	return (
		<section id="projects" className="projects">
			<h1 className="sectionTitle">Projects</h1>
			<div className="projects__projects-container">
				<ProjectCard
					src={ticTacToe}
					link={'https://github.com/rts-cmk/tic-tac-toe-ReedorReed'}
					title="Tic Tac Toe"
					subTitle="Fun little game"
				/>
				<ProjectCard
					src={ticTacToe}
					link={'https://github.com/rts-cmk/tic-tac-toe-ReedorReed'}
					title="Tic Tac Toe"
					subTitle="Fun little game"
				/>
			</div>
		</section>
	);
}
