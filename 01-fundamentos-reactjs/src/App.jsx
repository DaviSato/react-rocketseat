import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Post from './components/Post.jsx';
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DaviSato.png',
      name: 'Davi Sato',
      role: 'Front-End Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Myke Brito',
      role: 'Educator',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
];

export default function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((e) => {
            return (
              <Post key={e.id}
                author={e.author}
                content={e.content}
                publishedAt={e.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
