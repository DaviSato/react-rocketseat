import styles from './Avatar.module.css'

export default function Avatar({ src, hasBorder = false}) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}