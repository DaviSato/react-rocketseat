import { format, formatDistanceToNow } from 'date-fns'
import { ChangeEvent, FormEvent, useState } from 'react'
import Avatar from './Avatar'
import Comment from './Comment'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'


interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

export default function Post({ author, content, publishedAt }:PostProps) {

    const [comments, setComments] = useState(['Post muito bacana, hein?!'])

    const [newComment, setNewComment] = useState('')

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewComment(event.target.value);
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter((e) => {
            return e !== commentToDelete;
        });
        setComments(commentsWithoutDeletedOne);
    }

    const publisehdDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publisehdDateTelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/DaviSato.png" alt=''/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publisehdDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publisehdDateTelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((e) => {
                    if (e.type === 'paragraph') {
                        return <p key={e.content}>{e.content}</p>
                    } else if (e.type === 'link') {
                        return <p key={e.content}><a href="">{e.content}</a></p>
                    }
                })}
                <a href="">#novoprojeto</a>{' '}
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    required
                    value={newComment}
                    onChange={handleNewCommentChange}
                    name='comment'
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((e) => {
                    return <Comment key={e} content={e} onDeleteComment={() => deleteComment(e)} />
                })}
            </div>
        </article>
    )
}