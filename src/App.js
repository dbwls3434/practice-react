import { Provider } from "react-redux";
import { store } from "./store";
import AddTask from "./component/AddTask";
import Header from "./component/Header";
import Tasks from "./component/Tasks";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <AddTask />
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
