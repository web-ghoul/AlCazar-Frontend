import React, { useContext } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import styles from "./UserBox.module.scss"
import Title from '../Title/Title'
import { DeleteIconButton } from '@/MUIComponents/DeleteIconButton'
import { DeleteRounded, EditRounded } from '@mui/icons-material'
import { SecondaryIconButton } from '@/MUIComponents/SecondaryIconButton'
import { DashboardContext } from '@/context/DashboardContext'

const UserBox = ({ data, editable }) => {
    const { handleOpenDeleteUserModal, handleOpenEditUserModal } = useContext(DashboardContext)
    if (data) {
        return (
            <Paper className={`grid jcs aic g30 pad20 ${styles.user_box}`}>
                <Box sx={{ backgroundImage: `url(${data.avatar})` }} className={`${styles.avatar} center_rel_x`} />
                <Box className={`grid jcs aic g20`}>
                    <Title title={`${data.firstName} ${data.lastName}`} fw={600} h={"h5"} align={"center"} />
                    {editable && (<Box className={`flex jcsb aic g20`}>
                        <SecondaryIconButton onClick={() => handleOpenEditUserModal(data._id)} className={`fle jcc aic g5`}>
                            <EditRounded />
                            <Typography variant='h6'>Edit</Typography>
                        </SecondaryIconButton>
                        <DeleteIconButton onClick={() => handleOpenDeleteUserModal(data._id)}>
                            <DeleteRounded />
                        </DeleteIconButton>
                    </Box>)}
                </Box>
            </Paper>
        )
    }
    return (
        <Paper className={`grid jcs aic g30 pad20 ${styles.user_box}`}>

        </Paper>
    )
}

export default UserBox
