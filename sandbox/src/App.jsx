import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import "./global.css";
import styles from "./App.module.css";

// author: {avatar_url: string, name: string, role: string}
// publishedAt: Date
// content: string

const posts = [
  {
    id: "1",
    author: {
      avatar_url: "https://picsum.photos/200.webp",
      name: "John Smith",
      role: "Frontend Engineer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        type: "paragraph",
        content:
          "Debitis cupiditate qui quam voluptates maiores recusandae esse eos repudiandae.",
      },
      {
        type: "paragraph",
        content:
          "Unde harum dolorum accusamus aut temporibus repellat inventore ad quidem error tempore.",
      },
      {
        type: "link",
        content: "https://www.lipsum.com/",
      },
    ],
    publishedAt: new Date("2022-12-12 7:21:00"),
  },
  {
    id: "2",
    author: {
      avatar_url: "https://avatars.githubusercontent.com/u/46628080?v=4",
      name: "Leandro Machado",
      role: "Software Engineer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      },
      {
        type: "link",
        content: "https://www.lipsum.com/",
      },
    ],
    publishedAt: new Date("2022-12-29 20:11:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
