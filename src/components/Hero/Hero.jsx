import './Hero.sass';
import heroImg from '../../assets/hero-img.png';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import linkedinIconLight from '../../assets/linkedin-light.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import githubIconLight from '../../assets/github-light.svg';
import githubIconDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

export default function Hero() {
	const { theme, toggleTheme } = useTheme();

	const themeIcon = theme === 'light' ? sunIcon : moonIcon;
	const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark;
	const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;
	return (
		<section id="hero" className="hero">
			<div className="hero__colorModecontainer">
				<img
					className="hero__image"
					src={heroImg}
					alt="Profile picture of Christian Reed"
				/>

				<img
					className="hero__colorMode"
					src={themeIcon}
					alt="Color mode icon"
					onClick={toggleTheme}
				/>
			</div>
			<div className="info">
				<h1>
					Christian
					<br />
					Reed
				</h1>
				<h2>Frontend Developer</h2>
				<span>
					<a href="https://www.linkedin.com/in/christiansreed/" target="_blank">
						<img src={linkedinIcon} alt="Linkedin icon" />
					</a>
					<a href="https://github.com/ReedorReed/" target="_blank">
						<img src={githubIcon} alt="Github icon" />
					</a>
				</span>
				<p className="info__description">
					Passion for developing websites, coffee and climbing.
				</p>
				<a href={CV} download>
					<button className="info__cv-button">Resumé</button>
				</a>
			</div>
		</section>
	);
}
