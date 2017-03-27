import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.text}>{rowData}</Text>}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c91a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    backgroundColor: '#fff'
  },

  text: {
    fontSize: 25
  }
});
