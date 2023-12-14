import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import { useGlobalContext } from "../context/AppContext";
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalCom = () => {
  const {
    replaeDataChange,
    replaceAllWord,
    newReplaeText,
    oldText,
    newReplceData,
    handleOpenModal,
    handleCloseModal,
    openModal,
    setOpenModal,
  } = useGlobalContext();

  return (
    <>
      <div>
        <Button
          variant="contained"
          className="w-100"
          onClick={handleOpenModal}
          endIcon={<FindReplaceIcon />}
        >
          Search & Replace
        </Button>
        <Modal
          open={openModal}
          // onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box className="d-flex justify-content-between align-items-centers">
              <Typography variant="h5">Find and Replace</Typography>
              <IconButton
                color="secondary"
                aria-label="close"
                onClick={handleCloseModal}
              >
                <ClearIcon />
              </IconButton>
            </Box>
            <hr />
            <TextField
              id="outlined-basic"
              label="Searched Text"
              variant="outlined"
              className="w-100"
              name="oldText"
              onChange={replaeDataChange}
              value={newReplceData.oldText}
              autoComplete="off"
              color="secondary"
            />
            <TextField
              id="outlined-basic"
              label="Replacement Text"
              variant="outlined"
              className="w-100 mt-3"
              name="newReplceText"
              onChange={replaeDataChange}
              value={newReplceData.newReplaeText}
              autoComplete="off"
              color="secondary"
            />
            <Button
              variant="contained"
              className="w-100 mt-3"
              endIcon={<FindReplaceIcon />}
              onClick={replaceAllWord}
              color="secondary"
            >
              Replace
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ModalCom;
