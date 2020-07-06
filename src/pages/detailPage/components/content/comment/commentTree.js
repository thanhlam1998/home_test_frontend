import React, { useState } from 'react'
import Comment from './comment/comment'

const CommentTree = (props) => {
    const [toggle, setToggle] = useState(true)
    const level = 0;
    return (
        <div>
            {
                props.nodes.map((node,index) => (
                    <Comment
                        key={index}
                        node={node}
                        toggle = {toggle}
                        level = {level}
                    />
                ))
            }
        </div>
    )
}

export default CommentTree
