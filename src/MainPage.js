import styles from './MainPage.module.scss'
import yyj_line from './yyj_line.png'

const bilingualText = {
    en: {
        title: {
            heading: 'YingYuJiao',
            text: 'Welcome to the finally completed version of the English Corner.',
        },
        lessons: {
            one: 'MLA Format',
            two: 'Punctuation and Clauses',
            three: 'Figurative Language',
            four: 'Articles (grammar)',
            five: '地位 translation',
            six: 'At vs In',
            seven: 'Prefixes and Suffixes',
            eight: 'Early Modern English',
            nine: 'Will and Do',
            ten: 'Adjective Order',
            eleven: 'Essays',
            twelve: 'Describing Things as Old',
            thirteen: 'Noun Prepositional Phrase',
            fourteen: 'New Words',
            fifteen: 'Idioms (English Sayings)',
        },
    },
    cn: {
        title: {
            heading: '英语角',
            text: '欢迎来到最终完成的英语角版本',
        },
        lessons: {
            one: 'MLA格式',
            two: '标点符号和从句',
            three: '比与语言',
            four: '冠词',
            five: '地位',
            six: 'At和In的区别',
            seven: '前缀和后缀',
            eight: '早期现代英文',
            nine: 'Will和Do',
            ten: '形容词顺序',
            eleven: '文章',
            twelve: '形容陈旧的东西',
            thirteen: '名词介词短语',
            fourteen: '生词',
            fifteen: '俚语',
        },
    },
}

function MainPageEN() {
    return (
        <div className={styles.App}>
            <div className={styles.MainPage}>
                <div className={styles.MainPage__Title}>
                    <p className={styles['MainPage__Title--Heading']}>YingYuJiao</p>
                    <img className={styles['MainPage__Title--Divider']} alt='' src={yyj_line}></img>
                    <p className={styles['MainPage__Title--Text']}>Welcome to the finally completed version of the English Corner.</p>
                </div>
                <div className={styles.Grid}>
                    <div className={styles.MainPage__Lessons}>
                        <a href='./lessons/mla-format'>MLA Format</a>
                        <a href=''>Punctuation and Clauses</a>
                        <a href=''>Figurative Language</a>
                        <a href=''>Articles (grammar)</a>
                        <a href=''>地位 translation</a>
                        <a href=''>At vs In</a>
                        <a href=''>Prefixes and Suffixes</a>
                        <a href=''>Early Modern English</a>
                        <a href=''>Will and Do</a>
                        <a href=''>Adjective Order</a>
                        <a href=''>Essays</a>
                        <a href=''>Describing Things as Old</a>
                        <a href=''>Noun Prepositional Phrase</a>
                        <a href=''>New Words</a>
                        <a href=''>Idioms (English Sayings)</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function MainPageCN() {
    return (
        <div className={styles.App}>
            <div className={styles.MainPage}>
                <div className={styles.MainPage__Title}>
                    <p className={styles['MainPage__Title--Heading']}>英语角</p>
                    <img className={styles['MainPage__Title--Divider']} alt='' src={yyj_line}></img>
                    <p className={styles['MainPage__Title--Text']}>欢迎来到最终完成的英语角版本</p>
                </div>
                <div className={styles.Grid}>
                    <div className={styles.MainPage__Lessons}>
                        <a href=''>MLA格式</a>
                        <a href=''>标点符号和从句</a>
                        <a href=''>比与语言</a>
                        <a href=''>冠词</a>
                        <a href=''>地位</a>
                        <a href=''>At和In的区别</a>
                        <a href=''>前缀和后缀</a>
                        <a href=''>早期现代英文</a>
                        <a href=''>Will和Do</a>
                        <a href=''>形容词顺序</a>
                        <a href=''>文章</a>
                        <a href=''>形容陈旧的东西</a>
                        <a href=''>名词介词短语</a>
                        <a href=''>生词</a>
                        <a href=''>俚语</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPageCN