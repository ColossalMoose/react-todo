import styles from './Home.module.css';
import Todo from '../../components/Todo';



function Home() {
    return (
        <div className={styles.Home}>
            <Todo/>
        </div>
    );
}

export default Home;