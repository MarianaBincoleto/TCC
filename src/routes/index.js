import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome'
import Signin from '../pages/Signin'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Help_page from '../pages/Help_page'
import Conta from '../pages/Conta'

const Stack = createNativeStackNavigator();

export default function routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Help_page"
                component={Help_page}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Conta"
                component={Conta}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}