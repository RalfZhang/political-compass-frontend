/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import NumberFormat from 'react-number-format';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';

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
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  button: {
    [theme.breakpoints.up('sm')]: {
      marginRight: 20,
      marginTop: 40,
      width: 100,
    },
    [theme.breakpoints.down('sm')]: {
      margin: '40px auto',
      display: 'block',
      width: '80%',
    },
  },
});


function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      ref={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};


class BirthQuestion extends React.Component {
  state = {
    num: new Date().getFullYear() - 20,
  }
  handleChange = () => (event) => {
    this.setState({
      num: event.target.value,
    });
  }
  render() {
    const {
      data, option, classes, onClick,
    } = this.props;
    return (
      <div className={`${classes.base} ${option.progress > option.index ? classes.left : ''}${option.progress < option.index ? classes.right : ''}`}>
        <p className={classes.text}>{data.content}</p>
        <div>

          <Input
            value={this.state.num}
            onChange={this.handleChange('numberformat')}
            inputComponent={NumberFormatCustom}
          // className={classes.input}
            inputProps={{
            'aria-label': 'Description',
          }}
          />
        </div>
        <Button
          className={classes.button}
          raised
          color="primary"
          onClick={() => onClick(this.state.num, option.id)}
        >
          确定
        </Button>

      </div>
    );
  }
}


BirthQuestion.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  option: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(BirthQuestion);
