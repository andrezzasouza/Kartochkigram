import Popover from "@mui/material/Popover";
import styled from "styled-components";

export default function MouseOverPopover({
  anchorEl,
  setAnchorEl,
  itemDescription,
  openSidebar,
}) {
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      {!openSidebar && (
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
            marginLeft: 2,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <ItemDescription>{itemDescription}</ItemDescription>
        </Popover>
      )}
    </>
  );
}

const ItemDescription = styled.div`
  padding: 8px;
  background-color: #32476f;
  color: #fafafa;
`;
