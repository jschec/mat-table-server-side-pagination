import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';

const FormDialog = ({ title, children, openPopup, setOpenPopup }) => (
  <Dialog open={openPopup} maxWidth="md">
    <DialogTitle>
        {title}
    </DialogTitle>
    <DialogContent dividers>
        {children}
    </DialogContent>
  </Dialog>
);

FormDialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  openPopup: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
}

export default FormDialog;