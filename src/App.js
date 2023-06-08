import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import WelcomePage from "./Pages/WelcomePage";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import React from "react";
import axios from "axios";
import { API_URL } from "./config";
import "./App.css";
function App() {
  const [categories, setCategories] = React.useState([]);
  const [categoryName, setCategoryName] = React.useState("");
  React.useEffect(() => {
    axios.get(`${API_URL}/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);
  return (
    <div>
      <Box>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              מסעדת רוי ובניו
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                paddingRight: "580px",
                fontWeight: "bold",
                color: "black",
              }}
              className="center"
            >
              {categoryName}
            </Typography>
            <Button variant="">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/categories"
                onClick={() => {
                  setCategoryName("");
                }}
              >
                לתפריט
              </Link>
            </Button>
            <Button variant="">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/"
                onClick={() => {
                  setCategoryName("");
                }}
              >
                מעבר לעמוד הראשי
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/categories"
          element={
            <MainPage
              categories={categories}
              setCategoryName={setCategoryName}
            />
          }
        />
        <Route
          path="/categories/:id"
          element={
            <MainPage
              categories={categories}
              setCategoryName={setCategoryName}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
