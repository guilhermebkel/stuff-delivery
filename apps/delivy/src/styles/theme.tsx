import { createMuiTheme } from "@material-ui/core"

export default createMuiTheme({
	palette: {
		background: {
			default: "#F9F9F9"
		},
		primary: {
			main: "#7233EB"
		},
		secondary: {
			main: "#FFD164"
		},
		text: {
			primary: "#262444"
		}
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
		}
	},
	typography: {
		fontFamily: "Lato"
	}
})