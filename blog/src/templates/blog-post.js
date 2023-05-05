import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { H1 } from "../components/Heading";

const BlogPost = ({ data }) => {
    const { title, body } = data.contentfulBlogPost;

    return(
        <Layout>
            <H1>{title}</H1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    );
    
}

export default BlogPost;

const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
            body {
                childMarkdownRemark{
                    html
                }
            }
        }
    }
`