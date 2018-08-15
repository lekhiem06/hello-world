import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

export default class SearchInput extends React.Component {
  state = {
    text: '',
  };

  handleChangeText = text => {
    this.setState({ text });
  };

  handleSubmitEditing = () => {
    const { text } = this.state
    const { onSubmit } = this.props

    if (!text) return;

    onSubmit(text)
    this.setState({ text: '' })
  };

  render () {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
          placeholderTextColor="white"
          style={styles.textInput}
          clearButtonMode="always"
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  }
});