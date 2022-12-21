import styles from './Left.module.css';

function Left() {
	return (
		<div className={styles.left}>
			<i className='fa-brands fa-square-facebook'></i>
			<i className='fa-brands fa-square-instagram'></i>
			<i className='fa-brands fa-square-facebook'></i>
			<i className='fa-brands fa-square-twitter'></i>
		</div>
	);
}
export default Left;
