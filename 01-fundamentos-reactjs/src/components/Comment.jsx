import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'

export default function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/DaviSato.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>

                            <time title='11 de mais ás 08:13h' dateTime='2023-14-12 11:04:55'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}