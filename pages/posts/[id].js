import Layout from "../Components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from 'next/head';
import Date from "../Components/date";
import utilStyles from "../../styles/utilis.module.css";

export async function getStaticProps({params}){
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };

}
export async function getStaticPaths(){
    const paths=getAllPostIds();
    return {
        paths,
        fallback:false,
    };
}

export default function Post({postData}){

    return(
    <Layout>
        <Head>
            <title>
                   {postData.title}
            </title>
        </Head>

        <article>

        <br />
        <h1 clasName={utilStyles.headingXL}>{postData.title}</h1>
        <div className={utilStyles.lightText}>

        <Date dateString={postData.date}/>
        </div>

      
        <div dangerouslySetInnerHTML={{__html : postData.contentHtml}}></div>
        </article>
    </Layout>
    );
}