import logo from "./logo.svg";
import "./App.css";
// import { addTodo } from "./redux/actions";
// import useReduxDispatch from "./hooks/useReduxDispatch";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// function useReduxState() {
//   const store = useContext(ReduxContext);
//   const [state, setState] = useState(store.getState());

//   useEffect(() => {
//     const unsubscribe = store.subscribe(() => {
//       setState(store.getState());
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [store]);

//   return state;
// }

// function useReduxDispatch() {
//   const store = useContext(ReduxContext);

//   return store.dispatch;
// }

function App() {
  // const state = useReduxState();
  // const dispatch = useReduxDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );

  // function click() {
  //   dispatch(addTodo("todo"));
  // }
}

export default App;
