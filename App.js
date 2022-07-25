import { Provider } from "react-redux";
import store from "./redux/store";
import AuthNavigation from "./AuthNavigation";

export default function App() {
    return (
        <Provider store={store}>
            <AuthNavigation />
        </Provider>
    );
}
