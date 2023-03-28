import styles from './Button.module.css';

const Button=({children, disabled=false, onClick, className, title})=>{
    return(
        <button className={`${className} ${styles.button}`} title={title} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;