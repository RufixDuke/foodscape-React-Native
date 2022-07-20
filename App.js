import { MyStack } from "./navigator";
<<<<<<< HEAD
import { Provider } from "react-redux";
import store from "./redux/store";
// import {drawerNav} from './drawerNav'

export default function App() {
    return (
        <Provider store={store}>
            <MyStack />
        </Provider>
    );
=======

export default function App() {
    return <MyStack />;
>>>>>>> 964fbfb9ff3003ba3579153d0d219b311166199e
}
