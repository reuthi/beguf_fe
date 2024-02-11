import { Box, Skeleton, Typography } from "@mui/material"
import React, { Component } from 'react';

export const SearchItemText = (props: { item: any }) => {

    return (
        <Box sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100vh"
            // overflowY: "scroll",
        }}>
            <Box>
                <Typography variant="h4">{props.item.headline}</Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2">{props.item.time + " קריאה"}</Typography>
            </Box>
            <Box>
                <Typography variant="caption">{props.item.subheadline}</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                m: 4
            }}>
                <Skeleton variant="rectangular" width={300} height={250} />
            </Box>
            <Box>
                <Typography variant="body1">{props.item.content}</Typography>

            </Box>
        </Box>
    )
}

export default SearchItemText