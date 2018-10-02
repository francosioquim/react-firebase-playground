import { createMuiTheme } from 'cake-ui-v1/styles'

const fontWeightBold = 700
// const fontWeightSemiBold = 500
const fontWeightMedium = 500
const fontWeightRegular = 400
// const fontWeightThin = 300

const spacingUnit = 8
export const spacing = {
    unit: spacingUnit,
    xxl: spacingUnit * 10, // 80
    xl: spacingUnit * 6, // 48
    lg: spacingUnit * 4, // 32
    md: spacingUnit * 2, // 16
    sm: spacingUnit, // 8
    xs: spacingUnit / 2, // 4
}

const palette = {
    primary: {
        main: '#4B87FF',
        light: '#6d9eff',
        xlight: '#f2f6ff',
        dark: '#4B87FF',
        contrastText: '#fff',
    },
    secondary: {
        main: '#DBE7FF',
        light: '#6d9eff',
        dark: '#c9dbff',
        contrastText: '#4B87FF',
    },
    background: {
        light: '#F5F7FA',
        grey: '#F8F8F8',
        default: '#fff',
    },
    disabled: {
        main: '#CCCCCC',
    },
    success: {
        main: '#04CB94',
        light: '#CFFFD2',
        xlight: '#F5FDF7',
    },
    error: {
        main: '#FF2151',
        light: '#FBE3EE',
    },
    text: {
        primary: '#000000',
        secondary: '#949494',
    },
    divider: '#ECECEC',
    tooltip: {
        main: '#0b1f31',
        secondary: '#FFFFFF',
    },
}

const theme = createMuiTheme({
    palette,
    spacing,
    weights: {
        fontWeightBold,
        fontWeightMedium,
        fontWeightRegular,
    },
    status: {
        danger: 'orange',
    },
    props: {
        MuiWithWidth: {
            initialWidth: 'xs',
        },
    },
})

// We can only use typography function such as pxToRem after the createMuiTheme
// The values are taken from Cake UI Templates file on Roam Design Assets in Abstract
theme.typography = {
    ...theme.typography,
    fontFamily: "'Roboto', sans-serif",
    fontFamilySecondary: 'ProximaNova, sans-serif',
    title: {
        fontSize: theme.typography.pxToRem(40),
        lineHeight: theme.typography.pxToRem(47),
        fontWeight: fontWeightRegular,
    },
    headline: {
        fontSize: theme.typography.pxToRem(32),
        lineHeight: theme.typography.pxToRem(38),
        fontWeight: fontWeightRegular,
    },
    subheading: {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(38),
        fontWeight: fontWeightRegular,
        textTransform: 'uppercase',
        color: palette.text.primary,
    },
    caption: {
        fontSize: theme.typography.pxToRem(12),
        lineHeight: theme.typography.pxToRem(16),
        fontWeight: fontWeightRegular,
        textTransform: 'uppercase',
        color: palette.text.secondary,
    },
    body1: {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(18),
        fontWeight: fontWeightRegular,
        letterSpacing: theme.typography.pxToRem(0.45),
        fontFamily: 'ProximaNova',
    },
    body2: {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(18),
        fontWeight: fontWeightRegular,
    },
    display1: {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: theme.typography.pxToRem(28),
        fontWeight: fontWeightRegular,
    },
    // Taken from the h3 styling of Cake UI Template
    display2: {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: theme.typography.pxToRem(28),
        fontWeight: fontWeightBold,
    },
    display3: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: fontWeightRegular,
        lineHeight: theme.typography.pxToRem(18),
        letterSpacing: theme.typography.pxToRem(0.48),
    },
    display4: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: fontWeightRegular,
        lineHeight: theme.typography.pxToRem(18),
        letterSpacing: theme.typography.pxToRem(0.5),
    },
    tag: {
        fontSize: theme.typography.pxToRem(10),
        textTransform: 'uppercase',
        fontWeight: fontWeightRegular,
        color: palette.text.primary,
    },
}

// Overrides are assigned here so we can use theme.breakpoints
theme.overrides = {
    MuiCard: {
        root: {
            borderRadius: 0,
            border: `1px solid ${palette.divider}`,
            boxShadow: 'none',
        },
    },
    MuiChip: {
        root: {
            marginRight: spacing.sm,
            color: palette.primary.main,
            height: 28,
            backgroundColor: 'transparent',
            border: `1px solid ${palette.primary.main}`,
        },
    },
    MuiCheckbox: {
        root: {
            width: 24,
            height: 24,
            marginRight: 5,
            '& svg': {
                width: 15,
                height: 15,
            },
        },
    },
    MuiCollapse: {
        entered: {
            height: 'auto',
            overflow: 'visible',
        },
    },
    MuiButton: {
        root: {
            textTransform: 'none',
            borderRadius: 50,
            fontSize: '.85rem',
            fontWeight: fontWeightMedium,
            letterSpacing: theme.typography.pxToRem(1.25),
            minHeight: 44,
        },
        outlined: {
            borderColor: palette.secondary.dark,
            color: palette.secondary.dark,
        },
    },
    MuiLink: {
        link: {
            fontStyle: 'normal',
            color: palette.primary.main,
        },
    },
    MuiDialog: {
        paper: {
            borderRadius: 10,
            minWidth: 460,
            padding: 0,
        },
    },
    MuiDialogContent: {
        root: {
            padding: '10px 60px',
            overflowY: 'visible',
        },
    },
    MuiDialogTitle: {
        root: {
            padding: 40,
            '& h2': {
                textAlign: 'center',
                fontSize: theme.typography.pxToRem(32),
            },
        },
    },
    MuiDialogActions: {
        root: {
            padding: '20px 30px 40px 30px',
        },
    },
    MuiSwitch: {
        switchBase: {
            height: 36,
        },
    },
    MuiSelect: {
        icon: {
            color: 'inherit',
        },
        select: {
            color: theme.palette.primary.main,
        },
    },
    MuiMenuItem: {
        root: {
            fontSize: theme.typography.pxToRem(14),
            textTransform: 'none',
            fontFamily: 'ProximaNova',
            color: theme.palette.text.main,
            letterSpacing: theme.typography.pxToRem(0.88),
            padding: '6px 24px',
            minWidth: 100,
            // Hide empty label value
            '&[data-value=""]': {
                display: 'none',
            },
        },
    },
    MuiTab: {
        root: {
            textTransform: 'none',
            minHeight: 56,
            [theme.breakpoints.up('xs')]: {
                minWidth: 0,
                marginLeft: theme.spacing.lg,
                marginRight: theme.spacing.lg,
            },
            '&:first-of-type': {
                marginLeft: 0,
            },
        },
        label: {
            [theme.breakpoints.up('xs')]: {
                fontSize: theme.typography.pxToRem(18),
                fontWeight: fontWeightRegular,
            },
        },
        textColorPrimary: {
            color: palette.text.primary,
        },
        labelContainer: {
            [theme.breakpoints.up('xs')]: {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    MuiFormControlLabel: {
        root: {
            marginLeft: 0,
        },
    },
    MuiTableCell: {
        head: {
            color: palette.text.primary,
            fontSize: theme.typography.pxToRem(16),
            fontWeight: fontWeightMedium,
            padding: 10,
        },
        body: {
            color: palette.text.primary,
            fontSize: theme.typography.pxToRem(15),
            fontWeight: fontWeightRegular,
            padding: 10,
            position: 'relative',
        },
    },
    MuiTableHead: {
        root: {
            background: theme.palette.background.grey,
        },
    },
}

export default theme
