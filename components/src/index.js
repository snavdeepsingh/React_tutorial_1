import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="sam" 
                timeAgo="Today at 3:45PM" 
                url={faker.image.avatar()} 
                content="Nice blog post!" 
            /> 
            </ApprovalCard>
           <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="Today at 3:49PM" 
                url={faker.image.avatar()} 
                content="Love it!"
            /> 
           </ApprovalCard>
           
           <ApprovalCard>
            <CommentDetail 
                author="John" 
                timeAgo="Today at 3:58PM" 
                url={faker.image.avatar()} 
                content="Great!"
            /> 
           </ApprovalCard>
           
        </div>  
    )
}

ReactDom.render(<App/>, document.getElementById('root'));