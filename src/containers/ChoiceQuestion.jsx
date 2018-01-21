import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = () => ({});

const ChoiceQuetion = (props) => {
  const buttons = props.data.choice_group.map(e => (
    <Button raised color="primary" onClick={() => props.onClick(e.content)}>
      {e.content}
    </Button>
  ));
  return (
    <div>
      {props.data.content}
      <div>
        {buttons}
      </div>
    </div>
  );
};

ChoiceQuetion.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default withStyles(styles, { withTheme: true })(ChoiceQuetion);
