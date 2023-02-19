import styles from './button.module.css'

export default function Button({type, name}){
    return(
        <button 
            className={styles.button} 
            type={type}
            >{name}
        </button>
    )
}