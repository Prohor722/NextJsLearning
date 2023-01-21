import Meta from "../components/Meta";
import Link from "next/link";

const Posts = ({posts}) => {
    return ( 
        <>
        <Meta title="posts" keywords="posts list" description='no' />
            {
              posts.map(p=><div key={p.id}>
                <h4>{p.title.substring(0,10)}</h4>
                <p>{p.body.substring(0,20)}</p>
                <Link href={'/post/'+p.id}>
                <button>See Details</button></Link>
              </div>)
            }
        </>
     );
}
 
export const getServerSideProps = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
    const posts = await res.json();

    return {
        props: {posts}
    }
}
export default Posts;