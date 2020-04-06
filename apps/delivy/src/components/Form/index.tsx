import React from "react"

import { makeStyles } from "@material-ui/core"

interface FormProps {
	children: React.ReactNode
}

const useStyle = makeStyles({
	form: {
		display: "flex",
		flexDirection: "column"
	}
})

const Form = (props: FormProps) => {
	const { children } = props

	const classes = useStyle()

	return (
		<form className={classes.form}>
			{children}
		</form>
	)
}

export default Form