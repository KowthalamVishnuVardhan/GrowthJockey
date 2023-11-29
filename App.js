// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
import "./styles.css";
import TaskList from "./TaskList.js";

export default function App() {
  return (
    <div className="App">
      <h1>TODO</h1>
      <TaskList />
         
    </div>
  );
}