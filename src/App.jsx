import "./styles/app.css";

import {NotificationsHeader} from "./components/NotificationsHeader.jsx";

function App() {
    return (
        <div className={"content"}>
            <NotificationsHeader title={"Notifications"} newNotification={3}/>
        </div>
    )
}

export default App;