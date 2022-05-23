// @mui
import {Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {ArticleList} from "../sections/Main/Article";
import articles from "../app/article";
import BackToTop from "../sections/Main/ToTopWidget";

// ----------------------------------------------------------------------


export default function Main() {
    return (
        <Page title="Dashboard">
            <BackToTop/>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5 }}>
                    COMIX
                </Typography>

                    <Grid container spacing={3} sx={{paddingLeft:"30px"}}>
                        <ArticleList articles={articles}/>
                    </Grid>
            </Container>
        </Page>
    );
}
//<Pagination count={articles.length} showFirstButton showLastButton/>