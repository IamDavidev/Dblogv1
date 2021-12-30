import { useParams } from 'react-router-dom';
import { useQuery,gql } from '@apollo/client';
const Post = () => {
    const { title } = useParams();
    const PostTitle = title.replace('-', ' ');
    const GET_POST = gql`
    query Post($title: String!) {
        posts(filters: {title: {eq: $title}}) {
           data{
               id
               attributes{
                     title
               }
           }
        }
    }


    `
    const {data, loading , error} = useQuery(GET_POST,{
        variables:{
            title:PostTitle
        }
    });
    console.log(data);
    return (
    <>
      <h1>{title}</h1>
    </>
  );
};

export default Post;
