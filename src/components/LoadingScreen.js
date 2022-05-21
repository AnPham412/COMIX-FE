import {Box, CircularProgress, Stack} from "@mui/material";
import React from "react";

function LoadingScreen() {
    return (
        <Stack>
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <CircularProgress color="success" />
            </Box>
        </Stack>
    );
}

export default LoadingScreen;
