import React from 'react'
import AppNavigation from './AppNavigation'
import AuthScreen from '../../screen/Auth/AuthScreen'

const RootNavigation = () => {
    const user = null;
    return user ? <AppNavigation /> : <AuthScreen />
}

export default RootNavigation