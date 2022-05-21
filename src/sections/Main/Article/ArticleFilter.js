import PropTypes from 'prop-types';
// material
import {
    Box,
    Radio,
    Stack,
    Button,
    Drawer,
    Divider,
    Checkbox,
    FormGroup,
    IconButton,
    Typography,
    RadioGroup,
    FormControlLabel,
} from '@mui/material';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/ScrollBar';


export const FILTER_GENDER_OPTIONS = ['Boys', 'Girls', 'Kids'];
export const FILTER_GENRES_OPTIONS = ['Action', 'Comedy', 'Romance', 'Fantasy'];
FilterSidebar.propTypes = {
    isOpenFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
};

export default function FilterSidebar({ isOpenFilter, onOpenFilter, onCloseFilter }) {
    return (
        <>
            <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
                Filters&nbsp;
            </Button>

            <Drawer
                anchor="right"
                open={isOpenFilter}
                onClose={onCloseFilter}
                PaperProps={{
                    sx: { width: 280, border: 'none', overflow: 'hidden' },
                }}
            >
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
                    <Typography variant="subtitle1" sx={{ ml: 1 }}>
                        Filters
                    </Typography>
                    <IconButton onClick={onCloseFilter}>
                        <Iconify icon="eva:close-fill" width={20} height={20} />
                    </IconButton>
                </Stack>

                <Divider />

                <Scrollbar>
                    <Stack spacing={3} sx={{ p: 3 }}>
                        <div>
                            <Typography variant="subtitle1" gutterBottom>
                                Gender
                            </Typography>
                            <FormGroup>
                                {FILTER_GENDER_OPTIONS.map((item) => (
                                    <FormControlLabel key={item} control={<Checkbox />} label={item} />
                                ))}
                            </FormGroup>
                        </div>

                        <div>
                            <Typography variant="subtitle1" gutterBottom>
                                Category
                            </Typography>
                            <RadioGroup>
                                {FILTER_GENRES_OPTIONS.map((item) => (
                                    <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                                ))}
                            </RadioGroup>
                        </div>
                    </Stack>
                </Scrollbar>

                <Box sx={{ p: 3 }}>
                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="outlined"
                        startIcon={<Iconify icon="ic:round-clear-all" />}
                    >
                        Clear All
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}
