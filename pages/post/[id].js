import Meta from "../../components/Meta";

const Post = ({post}) => {
    return ( 
        <>
        <Meta title="post" keywords="posts list" description={post.body} />
            {
            <div>
                <h1>{post.id}</h1>
                <h5>{post.userId}</h5>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
            }
        </>
     );
}
 
export const getServerSideProps = async(context) =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+context.params.id);
    const post = await res.json();

    return {
        props: {post}
    }
}
export default Post;