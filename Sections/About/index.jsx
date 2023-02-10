import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					I am a passionate Full-Stack developer. I'm highly motivated and am always striving to improve. My goal is to use my skills in the most efficient and effective manner. I have also developed many scalable web applications 
incorporating REST APIs
My core skills include HTML, CSS, JavaScript, Node.js, React.js, MongoDB
					</p>
					{/* <p className={styles.desc}>
					I am a passionate Full-Stack developer. I'm highly motivated and am always striving to improve. My goal is to use my skills in the most efficient and effective manner. I have also developed many scalable web applications 
incorporating REST APIs
My core skills include HTML, CSS, JavaScript, Node.js, React.js, MongoDB
					</p> */}
				</div>
				<div className={styles.right}>
					<img
						src="./images/p.jpeg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;
