import GlobalStyle from "./styles/GlobalStyle.ts";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUp from "./pages/SignUp.tsx";
import SignUpResult from "./pages/SignUpResult.tsx";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<SignUp />} />
                    <Route path={"/result"} element={<SignUpResult />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
