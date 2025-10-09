import AuthProvider from "./providers/AuthProvider";
import BasicRoute from "./routers/BasicRoute";

function App() {
    return (
        <AuthProvider>
            <BasicRoute />
        </AuthProvider>
    );
}

export default App;
