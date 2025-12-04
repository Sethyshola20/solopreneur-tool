import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
    onPress: () => void;
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'ghost' | 'destructive';
    size?: 'default' | 'sm' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    style?: ViewStyle;
    icon?: keyof typeof Ionicons.glyphMap;
    iconPosition?: 'left' | 'right';
}

export function Button({
    onPress,
    children,
    variant = 'default',
    size = 'default',
    disabled = false,
    loading = false,
    style,
    icon,
    iconPosition = 'left',
}: ButtonProps) {
    const buttonStyle = [
        styles.base,
        styles[variant],
        styles[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        disabled && styles.disabled,
        style,
    ];

    const textStyle = [
        styles.text,
        styles[`text${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        styles[`textSize${size.charAt(0).toUpperCase() + size.slice(1)}`],
    ];

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
        >
            {loading ? (
                <ActivityIndicator size="small" color={variant === 'outline' || variant === 'ghost' ? '#fff' : '#fff'} />
            ) : (
                <>
                    {icon && iconPosition === 'left' && (
                        <Ionicons name={icon} size={18} color={variant === 'outline' || variant === 'ghost' ? '#fff' : '#fff'} style={{ marginRight: 8 }} />
                    )}
                    <Text style={textStyle}>{children}</Text>
                    {icon && iconPosition === 'right' && (
                        <Ionicons name={icon} size={18} color={variant === 'outline' || variant === 'ghost' ? '#fff' : '#fff'} style={{ marginLeft: 8 }} />
                    )}
                </>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1,
    },
    default: {
        backgroundColor: '#000',
        borderColor: '#333',
    },
    outline: {
        backgroundColor: 'transparent',
        borderColor: '#333',
    },
    ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    destructive: {
        backgroundColor: 'transparent',
        borderColor: '#FF3B30',
    },
    sizeDefault: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        minHeight: 40,
    },
    sizeSm: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        minHeight: 36,
    },
    sizeLg: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        minHeight: 48,
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        fontWeight: '600',
    },
    textDefault: {
        color: '#fff',
    },
    textOutline: {
        color: '#fff',
    },
    textGhost: {
        color: '#fff',
    },
    textDestructive: {
        color: '#FF3B30',
    },
    textSizeDefault: {
        fontSize: 14,
    },
    textSizeSm: {
        fontSize: 12,
    },
    textSizeLg: {
        fontSize: 16,
    },
});

