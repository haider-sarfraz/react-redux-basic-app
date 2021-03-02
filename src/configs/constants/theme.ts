interface ThemeVariants {
    CONTAINED: 'contained',
    TEXT: 'text'
    OUTLINED: 'outlined'
}

interface Theme {
    variants: ThemeVariants
}

export const themeConfigs:Theme = {
    variants: {
        CONTAINED: 'contained',
        TEXT: 'text',
        OUTLINED: 'outlined'
    }
}
