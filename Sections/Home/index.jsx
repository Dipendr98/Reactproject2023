import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>Dipendra kasaudhan.</h1>
			<h1 className={styles.heading_2}>I build things for the web.</h1>
			<p className={styles.desc}>
			I am a passionate Full-Stack developer. I'm highly motivated and am always striving to improve. My goal is to use my skills in the most efficient and effective manner. I have also developed many scalable web applications 
incorporating REST APIs
My core skills include HTML, CSS, JavaScript, Node.js, React.js, MongoDB
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;
