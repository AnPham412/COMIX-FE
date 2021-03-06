import { useState } from "react";
// material
import { Menu, Button, MenuItem} from "@mui/material";
// component
import Iconify from "../../../components/Iconify";

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "popular", label: "Most Popular" },
  { value: "read", label: "Most Read" },
];

export default function ArticleSort() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };
  const handleChange = (event) => {}
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={
          <Iconify
            icon={open ? "eva:chevron-up-fill" : "eva:chevron-down-fill"}
          />
        }
      >
        Sort By:&nbsp;
        {/* <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    {SORT_BY_OPTIONS.map((option)=>(
                        option.label[0]
                    ))}
                </Typography> */}
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value}
            onClick={handleClose}
            sx={{ typography: "body2" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
