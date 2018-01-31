import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  base: {
    // background: '#ccc',
    position: 'relative',
    transition: 'all 0.3s',
    left: 0,
    width: '100%',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  left: {
    // top: '300px',
    left: '-200%',
    position: 'absolute',
  },
  right: {
    position: 'absolute',
    left: '200%',
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
  text: {
    [theme.breakpoints.up('xs')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  button: {
    [theme.breakpoints.up('xs')]: {
      marginRight: 20,
      marginTop: 20,
      width: 100,
    },
    [theme.breakpoints.down('xs')]: {
      margin: '15px auto',
      display: 'block',
      width: '80%',
    },
  },
});

const ChoiceQuetion = (props) => {
  const {
    classes, option, data, onClick,
  } = props;
  const buttons = data.choice_group.map(e => (
    <Button
      className={classes.button}
      raised
      color="primary"
      key={e.value}
      onClick={() => onClick(e.value, option.id)}
    >
      {e.content}
    </Button>
  ));
  return (
    <div className={`${classes.base} ${option.progress > option.index ? classes.left : ''}${option.progress < option.index ? classes.right : ''}`}>
      <p className={classes.text}>{data.content}</p>
      <div>
        {buttons}
      </div>
    </div>
  );
};

ChoiceQuetion.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(ChoiceQuetion);
