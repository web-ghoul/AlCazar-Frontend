import React, { createContext, useState } from "react";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [itemId, setItemId] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [user_id, setUserId] = useState(null);
  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);
  const [openDeleteCategoryModal, setOpenDeleteCategoryModal] = useState(false);
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);
  const [openEditItemModal, setOpenEditItemModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [openEditUserModal, setOpenEditUserModal] = useState(false);

  //Delete
  const handleCloseDeleteItemModal = () => {
    setOpenDeleteItemModal(false);
  };
  const handleOpenDeleteItemModal = (id) => {
    setOpenDeleteItemModal(true);
    setItemId(id);
  };

  const handleCloseDeleteCategoryModal = () => {
    setOpenDeleteCategoryModal(false);
  };
  const handleOpenDeleteCategoryModal = (id) => {
    setOpenDeleteCategoryModal(true);
    setCategoryId(id);
  };

  const handleCloseDeleteUserModal = () => {
    setOpenDeleteUserModal(false);
  };
  const handleOpenDeleteUserModal = (id) => {
    setOpenDeleteUserModal(true);
    setUserId(id);
  };

  //Edit
  const handleCloseEditItemModal = () => {
    setOpenEditItemModal(false);
  };
  const handleOpenEditItemModal = (id) => {
    setOpenEditItemModal(true);
    setItemId(id);
  };

  const handleCloseEditCategoryModal = () => {
    setOpenEditCategoryModal(false);
  };
  const handleOpenEditCategoryModal = (id) => {
    setOpenEditCategoryModal(true);
    setCategoryId(id);
  };

  const handleCloseEditUserModal = () => {
    setOpenEditUserModal(false);
  };
  const handleOpenEditUserModal = (id) => {
    setOpenEditCategoryModal(true);
    setUserId(id);
  };
  return (
    <DashboardContext.Provider
      value={{
        itemId,
        categoryId,
        user_id,
        openDeleteItemModal,
        handleCloseDeleteItemModal,
        handleOpenDeleteItemModal,
        openDeleteCategoryModal,
        handleCloseDeleteCategoryModal,
        handleOpenDeleteCategoryModal,
        openDeleteUserModal,
        handleCloseDeleteUserModal,
        handleOpenDeleteUserModal,
        openEditItemModal,
        handleCloseEditItemModal,
        handleOpenEditItemModal,
        openEditCategoryModal,
        handleCloseEditCategoryModal,
        handleOpenEditCategoryModal,
        openEditUserModal,
        handleCloseEditUserModal,
        handleOpenEditUserModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
