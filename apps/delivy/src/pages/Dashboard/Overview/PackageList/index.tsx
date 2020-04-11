import React from "react"

interface Package {
	id: number
	last_place_consolidated: string
	last_place: string
	tracking_code: string
	last_update: Date
	status: string
}

interface PackageListProps {
	packages: Array<Package>
}

const PackageList = (props: PackageListProps) => {
	return <h1>PackageList</h1>
}

export default PackageList
