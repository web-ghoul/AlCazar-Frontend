import React, { useContext } from "react";
import Form from "@/components/Form/Form";
import { DashboardContext } from "@/context/DashboardContext";
import { Box, Modal } from "@mui/material";
import styles from "./modal.module.scss";

const EditItemModal = () => {
  const {
    openEditItemModal,
    handleCloseEditItemModal,
  } = useContext(DashboardContext);
  return (
    <Modal
      open={openEditItemModal}
      onClose={handleCloseEditItemModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`flex jcc aic ${styles.modal} center_abs_x_y pad20`}>
        <Form type={"edit_Item"} />
      </Box>
    </Modal>
  );
};

export default EditItemModal;
