import styles from './HeadFoot.module.scss'
import location from './location.svg'
import icon from './translation_icon.PNG'

function Head() {
    return (
        <div className={styles.Head}>
            <p className={styles.Head__title}>YingYuJiao</p>
            <img className={styles['Head__translation-icon']} src={icon} alt=''></img>
        </div>
    )
}

function Foot() {
    return (
        <div className={styles.Foot}>
            <div className={styles.Foot__left}>
                <p className={styles['Foot__left--location']}>
                    <img src={location} alt='' height='24px' className={styles['Foot__left--svg']}></img>&nbsp;United States
                </p>
            </div>
            <div className={styles.Foot__right}>Contact: spacetalon@gmail.com&nbsp;</div>
        </div>
    )
}

export {
    Head,
    Foot,
}