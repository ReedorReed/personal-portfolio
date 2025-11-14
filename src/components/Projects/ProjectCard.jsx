import React from 'react';

export default function ProjectCard({ src, link, title, subTitle }) {
	return (
		<>
			<a href={link} target="_blank">
				<img
					className="projects__image hover"
					src={src}
					alt={`${title} image`}
				/>
				<h3>{title}</h3>
				<p>{subTitle}</p>
			</a>
		</>
	);
}
