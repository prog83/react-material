import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import MultipleSelect from "../common/multipleselect";
import DatePickers from "../common/datepickers";
import * as Db from "../../db";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

function AppBody(props) {
  const { classes } = props;
  return (
    <div id="body">
      <Typography variant="h5" align="center">
        Введення
      </Typography>
      <MultipleSelect label="Категорія" data={Db.dictionary().katpv} />        
      <form className={classes.container} noValidate>
        <DatePickers
          id="driversLicenseDate"
          label="Дата видачі"
          required
        />
        <DatePickers
          id="withDrawelDateTime"
          label="Дата вилучення"
          required
        />
      </form>
    </div>
  );
}

export default withStyles(styles)(AppBody);