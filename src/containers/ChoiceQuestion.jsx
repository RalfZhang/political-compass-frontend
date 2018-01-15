import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = () => ({});

class ChoiceQuetion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
    };
  }
  render() {
    const buttons = this.props.data.choice_group.map(e => (
      <Button raised color="primary">
        {e.content}
      </Button>
    ));
    return (
      <div>
        {this.props.data.content}
        <div>
          {buttons}
        </div>
      </div>
    );
  }
}

ChoiceQuetion.propTypes = {
  data: PropTypes.object,
};


export default withStyles(styles, { withTheme: true })(ChoiceQuetion);
