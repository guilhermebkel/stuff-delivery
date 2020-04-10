import { createMuiTheme } from "@material-ui/core"

const palette = {
	light: {
		background: "#F9F9F9",
		text: "#262444"
	},
	dark: {
		background: "#262444",
		text: "#FFF"
	}
}

const SELECTED_PALETTE = "light"

export default createMuiTheme({
	palette: {
		background: {
			default: palette[SELECTED_PALETTE].background
		},
		primary: {
			main: "#7233EB"
		},
		secondary: {
			main: "#FFD164"
		},
		text: {
			primary: palette[SELECTED_PALETTE].text
		},
	},
	overrides: {
		MuiTypography: {
			h1: {
				fontWeight: 600,
				fontSize: "36px"
			},
			button: {
				textTransform: "none"
			}
		},
		MuiButton: {
			root: {
				textTransform: "none"
			}
		},
		MuiFormLabel: {
			root: {
				color: palette[SELECTED_PALETTE].text,
			}
		},
		MuiFormControlLabel: {
			root: {
				color: palette[SELECTED_PALETTE].text,
			}
		},
		MuiInputBase: {
			root: {
				color: palette[SELECTED_PALETTE].text,
				borderColor: palette[SELECTED_PALETTE].text,
			}
		},
		MuiCheckbox: {
			root: {
				color: palette[SELECTED_PALETTE].text,
			}
		}
	},
	typography: {
		fontFamily: "Lato"
	}
})