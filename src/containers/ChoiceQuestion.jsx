import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = () => ({
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
    <div className={option.isShow ? classes.show : classes.hide}>
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
