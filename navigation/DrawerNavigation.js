import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator'
import Profile from "../screens/Profile"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <DrawerNavigator>
            <Drawer.Screen name='Tela Inicial' component={TabNavigator} />
            <Drawer.Screen name='Perfil' component={Profile} />
        </DrawerNavigator>
    )
}

export default DrawerNavigator;