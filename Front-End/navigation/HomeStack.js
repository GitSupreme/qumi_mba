import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LandingPageScreen} from "../screens/LandingPageScreen";
import { OnboardingScreen} from "../screens/OnboardingScreen";
import { LoginPageScreen} from "../screens/LoginPageScreen/index";
import {CompanyScreen} from "../screens/CompanyScreen";
import {RegisterScreen,} from "../screens/RegisterScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {BranchesScreen} from "../screens/BranchesScreen";
import {TicketScreen} from "../screens/TicketScreen";
import {SettingScreen} from "../screens/SettingScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {AppointmentsScreen} from "../screens/AppointmentsScreen";
import { FormScreen } from "../screens/FormScreen/Index";
import { ConfirmScreen } from "../screens/ConfirmScreen/Index";
import { CheckScreen } from "../screens/CheckScreen/index";
import { BarScan } from "../screens/BarScan/index";
import {NotificationScreen} from "../screens/NotificationScreen/index";
import {HistoryScreen} from "../screens/HistoryScreen/index";




const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => (
  <Navigator headerMode ="none">
    <Screen name="onboarding" component={OnboardingScreen} />
    <Screen name="landing" component={LandingPageScreen} />
    <Screen name="home" component={HomeScreen} />
    <Screen name="login" component={LoginPageScreen} />
    <Screen name="register" component={RegisterScreen} />
    <Screen name="company" component={CompanyScreen} />    
    <Screen name="branches" component={BranchesScreen} />    
    <Screen name="ticket" component={TicketScreen} />    
    <Screen name="setting" component={SettingScreen} />    
    <Screen name="profile" component={ProfileScreen} />   
    <Screen name="appointments" component={AppointmentsScreen} />
    <Screen name="form" component={FormScreen} />
    <Screen name="confirm" component={ConfirmScreen} />
    <Screen name="check" component={CheckScreen} />
    <Screen name="barscan" component={BarScan} />
    <Screen name="notification" component={NotificationScreen} />
    <Screen name="history" component={HistoryScreen} />                
  </Navigator>
);
