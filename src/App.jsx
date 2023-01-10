import "./styles/app.css";

import {GlobalNotificationContext, useNotificationContext} from "./contexts/NotificationContext.jsx";
import {NotificationViewer} from "./components/sections/NotificationViewer.jsx";

function App() {
    return (
        <GlobalNotificationContext >
                <NotificationViewer />
        </GlobalNotificationContext>
    )
}

export default App;