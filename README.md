ContextApi

What is the purpose of contextAPI?

Normally, props are using to transfer state of the component, props are transferring state from Parent  Child  Grand-Child and so on … the problem is that through props we cannot transfer state directly from Parent Grand-Child, we have to carry state through proper hierarchy, in case of missing one component means, state will not transfer to other component. 

Example:
        Here is a App component
        function App() {
        return (
            <div>
            <h1>ContextApi</h1>
            <Parent value={5} />
            </div>
        );
        }


Parent Component
        function Parent({value}) {
            return(
                <div>
                    <h2>Parent Componen</h2>
                    <Child appValue = {value}/>
                </div>
            );
        }


Child Component
        function Child({appValue}) {

            return(
                <div>
                    <h3>Child Component {appValue}</h3>
                </div>
            );
        }


In above components, in app, parent component hold value 5, and this value passes through props to child and inside child component value is displaying. But in case, skip the parent component and pass directly there is no value transferred to child component.  
	
So, the contextApi is the solution of this problem. We create contextApi and wrap it with root component and that value/state is available to all its child components.

Step 1: create the context 
        import { createContext } from "react";

        const countContext = createContext(1);

        export default countContext;

on step 2: wrap this contextApi 
        function App() {
        return (
            <countContext.Provider value={100}>
            <div>
            <h1>ContextApi</h1>
            <Parent />
            </div>
            </countContext.Provider>
        );
        }

Here is parent component is wrapped, inside parent there is a child component, value is available to all its child components, child can directly access this value/state.
 
At step 3, access directly this value in a child component 
        function Child() {
            let value = useContext(countContext);
            return(
                <div>
                    <h3>Child Component {value}</h3>
                </div>
            );
        }

     
