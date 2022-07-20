import { MyStack } from "./navigator";
import { Provider } from "react-redux";
import store from "./redux/store";
// import {drawerNav} from './drawerNav'

export default function App() {
    return (
        <Provider store={store}>
            <MyStack />
        </Provider>
    );
}
