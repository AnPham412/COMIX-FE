import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { PostCard, PostsSort, PostsSearch } from '../sections/Main/Post';
// app
import POSTS from '../app/post';
import BackToTop from "../sections/Main/ToTopWidget";


export default function Post() {
    return (
        <Page title="Main: Posts">
            <Container>
                <BackToTop/>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        My Post
                    </Typography>
                    <Button variant="contained" component={RouterLink} to={`#`} startIcon={<Iconify icon="eva:plus-fill" />}>
                        New Post
                    </Button>
                </Stack>

                <Grid container spacing={3}>
                    {POSTS.map((post, index) => (
                        <PostCard key={post.id} post={post} index={index} />
                    ))}
                </Grid>
            </Container>
        </Page>
    );
}