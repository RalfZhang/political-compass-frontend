import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = () => ({});

class ChoiceQuetion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
    };
  }
  render() {
    return (
      <div>
        {this.props.data.short}
      </div>
    );
  }
}

ChoiceQuetion.propTypes = {
  data: PropTypes.object,
};


export default withStyles(styles, { withTheme: true })(ChoiceQuetion);
