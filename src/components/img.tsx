/**
 * A version of gatsby-image that accepts sanity images by default.
 */

import React from "react"
import GatsbyImg, {
    GatsbyImageWithIEPolyfillProps,
} from "gatsby-image/withIEPolyfill"
import {
    FluidObject as GatsbyFluidObject,
    FixedObject as GatsbyFixedObject,
} from "gatsby-image"

export type FluidObject = GatsbyFluidObject | GatsbyTypes.SanityImageFluid
export type FixedObject = GatsbyFixedObject | GatsbyTypes.SanityImageFixed

// @ts-ignore
export interface ImageProps extends GatsbyImageWithIEPolyfillProps {
    fluid?: FluidObject
    fixed?: FixedObject
}

const Img: React.FC<ImageProps> = props => {
    return (
        // @ts-ignore
        <GatsbyImg {...props} />
    )
}

export default Img
