import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = () => ({
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
});

const ChoiceQuetion = (props) => {
  const {
    classes, option, data, onClick,
  } = props;
  const buttons = data.choice_group.map(e => (
    <Button
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
      <p>{data.content}</p>
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
