import styles from '@/styles/Custom.module.css'
// import styles from '@/styles/Home.module.css''
import Link from 'next/link'

const Header = () => {
    return ( 
        <div className={styles.main}>
            <h1>This is header</h1>
            <div className={styles.navitems}>
                <Link className={styles.sp} href="/about">About</Link>
                <Link className={styles.sp} href="/contact">Contact</Link>
                <Link className={styles.sp} href="/posts">Posts</Link>
            </div>
        </div>
     );
}
 
export default Header;