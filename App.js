import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Alert, Image, ScrollView, Switch, ActivityIndicator, TextInput } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={{height:"100%"}}>
        <TableView>
          <Section header="Regular cells">
            <Cell cellStyle="Basic" title="Basic cell" />
            <Cell cellStyle="RightDetail" title="Cell with right detail" detail="Detail" />
            <Cell cellStyle="LeftDetail" title="Cell with left detail" detail="Detail" />
          </Section>

          <Section header="Cells with accessories">
              <Cell
                cellStyle="Basic"
                accessory="DisclosureIndicator"
                title="Basic cell with pressable!"
                onPress={() => alert("test!")}
              />
              <Cell
                cellStyle="RightDetail"
                accessory="DetailDisclosure"
                title="Cell with right detail"
                detail="Detail"
              />
              <Cell
                cellStyle="Subtitle"
                accessory="Checkmark"
                title="Basic cell"
                detail="with subtitle! And checkmark"
              />
            </Section>

            <Section header="Cells with other elements">
              <Cell
                cellStyle="Basic"
                title="Cell with image"
                image={
                  <Image
                    style={{ borderRadius: 5 }}
                    source={require('./assets/logo-og.png')}
                  />
                }
              />
              <Cell
                cellStyle="RightDetail"
                title="Cell with custom detail colour"
                detail="Detail"
                rightDetailColor="red"
              />
              <Cell
                cellStyle="Basic"
                title="Cell with a switch"
                cellAccessoryView={<Switch />}
                contentContainerStyle={{ paddingVertical: 4 }}
              />
              <Cell
                cellStyle="Basic"
                title="Cell with an activity indicator"
                cellAccessoryView={<ActivityIndicator />}
              />
              <Cell
                cellContentView={
                  <TextInput
                    style={{ fontSize: 16, flex: 1 }}
                    placeholder="A text input cell"
                  />
                }
              />
            </Section>

            <Section header="Custom cells">
              <Cell
                  contentContainerStyle={{ alignItems: 'center', height: 60, backgroundColor:"lightblue" }}
                  cellContentView={
                    <Text style={{ flex: 1, fontSize: 16, textAlign: 'center', color:"darkblue", fontWeight:"bold" }}>
                      Custom height, and content view
                    </Text>
                  }
                />
            </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
