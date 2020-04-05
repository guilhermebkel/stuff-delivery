import React from "react"

interface DividerProps {
	size: number
}

const Divider = (props: DividerProps) => {
	const { size } = props

	const spaceElements = []

	for (let i = 0; i<size; i++){
		spaceElements.push(<br />)
	}

	return (
		<>
			{spaceElements}
		</>
	)
}

export default Divider
