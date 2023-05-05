import { ReactElement } from "react";
import { Configs } from "./Configs";
import {
    Chat20Regular,
    DataUsageSettings20Regular,
    DocumentSettings20Regular,
    Home20Regular, Info20Regular, Settings20Regular, Storage20Regular
} from '@fluentui/react-icons';
import {Home} from './Home';
import {Chat} from './Chat';
import {Models} from './Models';
import {Train} from './Train';
import {Settings} from './Settings';
import {About} from './About';

type NavigationItem = {
    label: string;
    path: string;
    icon: ReactElement;
    element: ReactElement;
    top: boolean;
};

export const pages: NavigationItem[] = [
    {
        label: "Home",
        path: "/",
        icon:<Home20Regular />,
        element: <Home />,
        top: true,
    },
    {
        label: "Chat",
        path: "/chat",
        icon:<Chat20Regular />,
        element: <Chat />,
        top:true
    },
    {
        label: "Configs",
        path: "/configs",
        icon:<DocumentSettings20Regular />,
        element: <Configs />,
        top:true
    },
    {
        label: "Models",
        path: "/models",
        icon:<DataUsageSettings20Regular />,
        element: <Models />,
        top:true
    },
    {
        label: "Train",
        path: "/train",
        icon:<Storage20Regular />,
        element: <Train />,
        top:true
    },
    {
        label: "Settings",
        path: "/settings",
        icon:<Settings20Regular />,
        element: <Settings />,
        top:false
    },
    {
        label: "About",
        path: "/about",
        icon:<Info20Regular />,
        element: <About />,
        top:false
    }
];
