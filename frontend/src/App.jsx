import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Feed from "./pages/Feed";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				{/* <Route path="/" element={<Navigate to="/login" />} /> */}
				<Route path='/feed' element={<Feed />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
