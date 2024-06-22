declare module 'react-native-vector-icons' {
    import { Component } from 'react';
    import { TextProps } from 'react-native';

    interface IconProps extends TextProps {
        name: string;
        size?: number;
        color?: string;
    }

    export class Ionicons extends Component<IconProps> {}
    export class FontAwesome extends Component<IconProps> {}
    export class MaterialIcons extends Component<IconProps> {}
    // Add other icon sets here as needed
}
