import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = () => ({
  base: {
    position: 'absolute',
    transition: 'all 0.3s',
    left: 0,
    width: '100%',
    top: 0,
  },
  left: {
    // top: '300px',
    left: '-200%',
  },
  right: {
    left: '200%',
  },
  show: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
});

const ChoiceQuetion = (props) => {
  const { classes, option } = props;
  const buttons = props.data.choice_group.map(e => (
    <Button
      raised
      color="primary"
      key={e.value}
      onClick={() => props.onClick(e.content, option.index)}
    >
      {e.content}
    </Button>
  ));
  return (
    <div className={`${classes.base} ${option.progress > option.index ? classes.left : ''}${option.progress < option.index ? classes.right : ''}`}>
      {props.data.content}
      <div>
        {buttons}
      </div>
    </div>
  );
};

ChoiceQuetion.propTypes = {
  data: PropTypes.object.isRequired,
  // onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(ChoiceQuetion);
