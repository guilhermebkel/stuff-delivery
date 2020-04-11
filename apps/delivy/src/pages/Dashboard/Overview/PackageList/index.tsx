import React from "react"

interface PackageListProps {
	packages: Array<{
		id: number
		last_place_consolidated: string
		last_place: string
		tracking_code: string
		last_update: Date
		status: string
	}>
}

const PackageList = (props: PackageListProps) => {
	return <h1>PackageList</h1>
}

export default PackageList
