import Head from "next/head";

const Meta = ({title, keywords, description}) => {
    return ( 
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible"content="IE-edge"></meta>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
     );
}
 
Meta.defaultProps = {
    title: "No Title",
    keywords: "NO Keywords",
    description: "No description"
}
export default Meta;