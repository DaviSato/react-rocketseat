import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'
import { useState } from 'react'

interface CommentProps{
    content: string;
    onDeleteComment: ()=> void;
}

export default function Comment({content, onDeleteComment}:CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleLikeButton(){
        let counter = likeCount;
        setLikeCount(counter+1);
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/DaviSato.png" alt=''/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>

                            <time title='11 de mais ás 08:13h' dateTime='2023-14-12 11:04:55'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={onDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeButton}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}