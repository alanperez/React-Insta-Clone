import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return(
        <div className="post-container">
            <div>
           <img className="thumbnail "src={props.thumbnailUrl} alt="thumbnail" />
            {props.username}
            </div>

            <div>
            <img className="likes"src={props.imageUrl} alt="alt" />
              {props.likes}
            </div>
            
             <div>
                <CommentSection comments={props.comments}  />
              </div>
        </div>
    )
}

export default PostContainer;