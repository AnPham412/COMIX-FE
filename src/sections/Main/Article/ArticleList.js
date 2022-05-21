import React from 'react';
import PropTypes from 'prop-types';
// material
import {Box, Grid} from '@mui/material';
import ArticleCard from './ArticleCard';
import {Pagination} from "@mui/lab";

// ----------------------------------------------------------------------
let limit = 24;
ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default function ArticleList({ articles, ...other }) {
    const [page, setPage] = React.useState(1);
    const handleChange = (event,newPage)=>{
        setPage(newPage);
    };
    const totalPage = Math.ceil(articles.length/limit)
    return (
        <>
        <Grid container spacing={3} {...other}>
            {articles.slice((page - 1)*limit,page*limit).map((article) => (
                <Grid key={article.id} item xs={12} sm={6} md={3}>
                    <ArticleCard article={article} />
                </Grid>
            ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}>
            <Pagination
                count={totalPage}
                page={page}
                onChange={handleChange}
            c   olor="primary"
            />
        </Box>
        </>
    );
}
