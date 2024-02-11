import { Box, Chip, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// import * as images from "../assets/png/categories";

const SearchCategories = () => {
    const navigate = useNavigate()
    const categories = [
        {
            title: 'כאב',
            page: "pain",
            background: "linear-gradient(#E96F7D, #fff)",
            image: require('../assets/png/categories/pain.png')
        },
        {
            title: 'רגשות',
            page: "feelings",
            background: "linear-gradient(#75D6A1, #fff)",
            image: require('../assets/png/categories/feelings.png')
        },
        // {
        //     title: 'שינה טובה',
        //     background: "rgba(233, 111, 125, 1)",
        //     image: require('../assets/png/categories/pain.png')


        // },
        // {
        //     title: 'הרפיה',
        //     background: "rgba(233, 111, 125, 1)",
        //     image: require('../assets/png/categories/pain.png')


        // },
        // {
        //     title: 'מודעות',
        //     background: "rgba(233, 111, 125, 1)",
        //     image: require('../assets/png/categories/pain.png')


        // },

    ]
    return <>
        <Box textAlign={"center"} display={"flex"} flexDirection={"column"} px={4}>
            <Box py={3}>
                <Typography variant="h4" textAlign={"right"} sx={{
                    color: "#0D4665",
                    fontSize: "30px",
                    fontWeight: "bold"
                }}>להרגיש טוב</Typography>
            </Box>
            <Box pb={3}>
                <TextField id="outlined-basic" fullWidth variant="outlined" InputProps={{ sx: { borderRadius: 0 } }}
                />
            </Box>
            <Box py={3}>
                <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {categories.map((category, index) => (
                        <Grid item xs={12} key={index}>
                            <Paper sx={{
                                background: category.background,
                                padding: 2,
                                textAlign: 'center',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                borderRadius: "30px"
                            }}

                                onClick={() => navigate(`/search/category/${category.page}`)}>
                                <Box p={2}>
                                    <Typography sx={{
                                        color: "#0D4665",
                                        fontSize: "30px",
                                        fontWeight: "bold"
                                    }}>{category.title}</Typography>
                                </Box>
                                <Box sx={{
                                    display: "flex",
                                    width: "100%",
                                    justifyContent: "flex-end"
                                }}>
                                    <img src={category.image} alt={category.page}></img>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    </>
}

export default SearchCategories;
