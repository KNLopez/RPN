import { Button, withStyles } from '@material-ui/core'


export const StyledButton = withStyles(theme => ({
  root: {
    height: 55,
    color: "#fff",
    textTransform: "capitalize",
    backgroundColor: "#79cea1",
    "&:hover": {
      backgroundColor: "#79cea1"
    }
  }
}))(Button);

