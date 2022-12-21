import Center from './components/Center/Center';
import Left from './components/Left/Left';
import Rigth from './components/Right/Right';
import styles from "./Top.module.css";

function Top() {
	return (
		<div className={styles.top}>
			<Left className={styles.left}/>
			<Center className={styles.center}/>
			<Rigth className={styles.rigth}/>
		</div>
	);
}
export default Top;
