import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field} from 'formik';



const MyPosts = React.memo(props => {

  let postElements = [...props.postData]
  .reverse()
  .map((post) => {
    return (
      <Post message={post.post} likes={post.likes} key={post.id} />
    );
  }
  );


  let addNewPost = (postBody) => {
    props.addPost(postBody);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div className={classes.addPostBlock}>
        <PostsForm addPost={addNewPost} />
      </div>
      <div className={classes.posts}>
        {postElements}

      </div>
    </div>

  );
})

const PostsForm = (props) => {
  return (
      <Formik
      initialValues={{ postBody: ''}}
     
      onSubmit={(values, { setSubmitting }) => {
          props.addPost(values.postBody);
          setSubmitting(false);
       
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <div>
          <Field type="text" name="postBody"  />
          </div>
          
          <div>
          <button type="submit" disabled={isSubmitting}>
            Add Post
          </button>
          </div>

        </Form>
      )}
    </Formik>
  );
}

export default MyPosts;