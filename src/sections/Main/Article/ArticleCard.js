import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import {Box, Card, Link, Typography, Stack, CardActionArea} from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Label from '../../../components/Label';

const ArticleImgStyle = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

ArticleCard.propTypes = {
    article: PropTypes.object,
};

export default function ArticleCard({ article }) {
    const {name,cover,status } = article;

    return (
        <Card>
            <CardActionArea>
                <Link to='#'>
                    <Box sx={{ pt: '100%', position: 'relative' }} >
                        {status && (
                            <Label
                                variant="filled"
                                sx={{
                                    zIndex: 9,
                                    top: 16,
                                    right: 16,
                                    position: 'absolute',
                                    textTransform: 'uppercase',
                                }}
                            >
                                {status}
                            </Label>
                        )}
                        <ArticleImgStyle alt={name} src={cover} />
                    </Box>
                </Link>
                <Stack spacing={2} sx={{ p: 3 }}>
                    <Link to='#' color="inherit" underline="hover" component={RouterLink}>
                        <Typography variant="subtitle2" noWrap>
                            {name}
                        </Typography>
                    </Link>
                </Stack>
            </CardActionArea>
        </Card>
    );
}