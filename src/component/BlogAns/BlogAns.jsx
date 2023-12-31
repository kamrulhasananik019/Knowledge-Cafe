import React from 'react';

const BlogAns = () => {
    return (
        <div className='container text-success mt-4'>
             <div>
                <h1 className=' text-center'>BLOG ANSWER</h1>

            
        <div className='p-3'>
             {/* first ans */}
           <h3>1.What is the difference between props and state in ReactJS? </h3> 
           <h5>In ReactJS, both props and state are used to manage data and communicate 
            between components, but they serve different purposes. </h5>
            <p>Props are like instructions that a parent component gives to its child components. 
                Child components can use these instructions to customize their behavior or appearance, 
                but they cannot change the instructions themselves. 
                The parent component can update these instructions as needed.</p>
                <p>State is like a component's memory that it uses to keep track of information that
                     can change over time. It's different from props because a component can update its
                      own state whenever it needs to, without relying on other components. When the state
                       changes, the component will automatically re-render to update the user interface based
                        on the new information. State is usually used to store information that only
                         the component itself needs to
                know about, and isn't important to other components. </p>
        </div>

    <div className='p-3'>
    {/* 2nd  ans */}
    <h3>
    2.How to work useState ReactJS?
    </h3>
    <p>The <code>useState</code> hook in ReactJS allows you to add state to 
    functional components. It takes an initial value and returns an array with
     the current state value and a function to update the state. You can use the
      state variable directly in your JSX, and React will automatically update the 
      view when the state changes. This is a powerful tool for managing complex user
       interface states and making ReactJS
         even more useful for building modern web applications.</p>
    </div>
    
    <div className='p-3'>
{/* 3rd ans */}
<h3>3.In react.js, useEffect What kinds of things do without data loading?</h3>
<p>The useEffect hook in ReactJS is used to perform additional actions in functional
     components, like updating the document title, setting up event listeners, triggering 
     animations, scheduling tasks, updating global state, sending analytics, or saving state 
     to local storage. It's a powerful tool that helps you organize your code and separate concerns. 
     useEffect provides a clean and concise way to perform these actions
     in a declarative manner.</p>
    </div>
   <div className='p-3'>
     {/* 4th ans */}
    <h3>
    4.How does ReactJS work ?
    </h3>
    <p>ReactJS is a JavaScript library that allows developers to 
        build user interfaces by composing reusable components.
         When a user interacts with a ReactJS application, React 
         updates the UI by rendering the components that have changed.
          React uses a virtual DOM to efficiently update the UI by comparing 
          the current state of the virtual DOM with the previous state, and only 
          applying the necessary changes to the actual DOM.
         This process is known as reconciliation.</p>
   </div>
        </div> 
        </div>
    );
};

export default BlogAns;