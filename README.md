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


Let do it little complicated, we want to increment in that value on button click even, so value is state variable , child cannot make increment, but there is a option , if parent component allow this child to change this value then child can do it 

    function App() {  
        let valueCount = useState(1);
        return (
            <countContext.Provider value={valueCount}>
            <div>
            <h1>ContextApi</h1>
            <Parent />
            </div>
            </countContext.Provider>
        );
    }


    useState hook created and pass this state to contextApi provider, as we know useState return in array , on 0th index there is initial state and on first index there is a function, if child want to make change it has to access this function and then state can be change.

        function Child() {
            let value = useContext(countContext);
            return(
                <div>
                    <h3>Child Component {value}</h3>
                    <button onClick= { ()=> {value[1](++value[0])}}> Increament </button>
                </div>
            );
        }

 
    So in child component, it access that function and make increment in that value. 

     
