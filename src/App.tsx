import CssBaseline from "@mui/material/CssBaseline";
import { AppBar } from "@/components/AppBar";
import { ThemeWrapper } from "@/components/ThemeWrapper";

const App = () => {
	return (
		<ThemeWrapper>
			<CssBaseline />
			<AppBar />
		</ThemeWrapper>
	);
};

export default App;
