import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) =>{
    switch(action.type){
        case 'add_blogpost':
            return [...state, {title:`Blog Post #${state.length + 1}`}];
        ///case 'delete_blogpost':
        ///case 'edit_blogpost':
        default:
            return state;
    }
}
export const BlogProvider = ({children}) =>{
    const [state, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () =>{
        dispatch({type: 'add_blogpost'});
    }
    return <BlogContext.Provider value={{data: state, addBlogPost}}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;