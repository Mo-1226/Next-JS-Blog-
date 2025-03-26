import { posts } from '../../data/posts';
import styles from './Post.module.css';
import Layout from '../../navigation';

export default function Post ({ params }) {
    
    const post = posts.find((post) => post.id === params.id);
    
    if (!post) {
        return <h1> Post Not Found </h1>
    }

    return (
        <Layout>
            <main className = {styles.container}>
                <h1 className={styles.title}> {post.title} </h1>
                <h1 className = {styles.content}> {post.content} </h1>
            </main>
        </Layout>
    );
}