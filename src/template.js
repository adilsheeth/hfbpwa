import { Box, Typography } from "@mui/material"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"

export default function Template() {
    return (
        <div>
            <Header/>
            <Box height={'84vh'}>
                <Typography>
                    Template!
                </Typography>
            </Box>
            <Footer/>
        </div>
    )
}