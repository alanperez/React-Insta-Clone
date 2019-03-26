import React from 'react';
// import Comments from './Comments'

const CommentSection = props => {
    return (
        <div className="CommentSection">
            {props.comments.map(comment => (
                <div>
                <p><strong>{comment.username}</strong> {comment.text}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentSection;  