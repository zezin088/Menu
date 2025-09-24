import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaInicio from "./tela/telainicio";
import TelaSobre from "./tela/telasobre";
import TelaContato from "./tela/telacontato";

// Cria o Drawer para navegação lateral
const Drawer = createDrawerNavigator();

function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRoutename="TelaInicio">
        <Drawer.Screen name="TelaInicio" component={TelaInicio} />
        <Drawer.Screen name="TelaSobre" component={TelaSobre} />
        <Drawer.Screen name="TelaContato" component={TelaContato} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;