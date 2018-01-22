import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = () => ({
  base: {
    position: 'absolute',
    transition: 'all 0.5s',
    left: 0,
  },
  left: {
    left: '-100%',
  },
  right: {
    left: '100%',
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
    <div className={`base ${option.progress > option.index ? 'left' : ''}${option.progress < option.index ? 'right' : ''}`}>
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
