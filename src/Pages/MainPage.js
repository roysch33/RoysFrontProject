import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config";
import "./MainPage.css";

function MainPage({ categories, setCategoryName }) {
  const navigate = useNavigate();
  const params = useParams();
  const [dishes, setDishes] = React.useState([]);

  React.useEffect(() => {
    if (params.id === undefined) {
      fetchDishes();
    } else {
      filterByCategory(params.id);
    }
  }, [params.id]);

  function fetchDishes() {
    axios.get(`${API_URL}/dishes`).then((response) => {
      setDishes(response.data);
    });
  }

  function filterByCategory(category_id) {
    axios.get(`${API_URL}/dishes/category/${category_id}`).then((response) => {
      setDishes(response.data);
    });
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <div style={{ height: "90vh", overflow: "scroll" }}>
            <Grid container spacing={3}>
              {dishes
                .sort((a, b) => a.category_id_id - b.category_id_id)
                .map((dish) => (
                  <Grid item key={dish.id} xs={6}>
                    <div className="center">
                      <Card style={{ margin: "10px", width: "500px" }}>
                        <CardHeader
                          title={dish.dish_name}
                          style={{ textAlign: "center" }}
                        />
                        <CardMedia
                          component="img"
                          height="200"
                          image={dish.image}
                          alt={dish.dish_name}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{ textAlign: "center" }}
                          >
                            {dish.description}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{ textAlign: "center" }}
                          >
                            {dish.price}₪ :מחיר
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div
            className="flex-container"
            style={{
              border: "1px black solid",
              height: "90vh",
              overflow: "scroll",
            }}
          >
            <br />
            {categories.map((category) => (
              <div
                style={{
                  margin: "5px",
                }}
              >
                <div className="container">
                  <Button
                    onClick={() => {
                      navigate(`/categories/${category.id}`);
                      setCategoryName(category.name);
                    }}
                    className="imageperfect"
                  >
                    <img
                      style={{ width: "200px", height: "200px" }}
                      src={category.image}
                      alt={category.name}
                    />
                    <div className="centered">{category.name}</div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
