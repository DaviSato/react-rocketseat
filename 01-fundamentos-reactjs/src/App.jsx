import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Post from './components/Post.jsx';
import styles from './App.module.css'
import './global.css'

export default function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post></Post>
          <Post></Post>
        </main>
      </div>
    </div>
  )
}
