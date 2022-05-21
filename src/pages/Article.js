import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ArticleSort, ArticleList,FilterSidebar } from '../sections/Main/Article';
// app
import articles from '../app/article';
import BackToTop from "../sections/Main/ToTopWidget";


export default function ComicListing() {
    const [openFilter, setOpenFilter] = useState(false);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <Page title="Main: Articles">
            <BackToTop />
            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Hi, Welcome back
                </Typography>

                <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
                    <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                        <FilterSidebar
                            isOpenFilter={openFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                        />
                        <ArticleSort />
                    </Stack>
                </Stack>
                <ArticleList articles={articles} />
            </Container>
        </Page>
    );
}