import { configure } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import "!style-loader!css-loader!sass-loader!./scss-loader.scss"

configure(require.context("../src", true, /\.stories\.tsx$/), module)

global.___loader = {
    enqueue: () => {},
    hovering: () => {},
}
global.__PATH_PREFIX__ = ""
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
}
