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
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaSass } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';

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
				<div className="info__skills">
					<FaHtml5 style={{ color: theme === 'light' ? '#222' : '#fff' }} />
					<FaCss3Alt style={{ color: theme === 'light' ? '#222' : '#fff' }} />
					<IoLogoJavascript
						style={{ color: theme === 'light' ? '#222' : '#fff' }}
					/>
					<FaSass style={{ color: theme === 'light' ? '#222' : '#fff' }} />
					<FaReact style={{ color: theme === 'light' ? '#222' : '#fff' }} />
					<SiVite style={{ color: theme === 'light' ? '#222' : '#fff' }} />
					<FaGitAlt style={{ color: theme === 'light' ? '#222' : '#fff' }} />
					<FaGithub style={{ color: theme === 'light' ? '#222' : '#fff' }} />
					<FaFigma style={{ color: theme === 'light' ? '#222' : '#fff' }} />
				</div>
				<span>
					<h2>Social & GitHub</h2>
					<div>
						<a
							href="https://www.linkedin.com/in/christiansreed/"
							target="_blank">
							<img src={linkedinIcon} alt="Linkedin icon" />
						</a>
						<a href="https://github.com/ReedorReed/" target="_blank">
							<img src={githubIcon} alt="Github icon" />
						</a>
					</div>
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
