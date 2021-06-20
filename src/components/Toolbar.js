import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import FilterIcon from '@material-ui/icons/Filter';

const Toolbar = ({ title, onCreate, onFilter }) => (
    <div>
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <div>
                <Fab size="small" color="primary" onClick={onCreate}>
                    <AddIcon />
                </Fab>
                <Fab size="small" color="secondary" onClick={onFilter}>
                    <FilterIcon />
                </Fab>
            </div>
        </Grid>
    </div>
);

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
}

export default Toolbar;