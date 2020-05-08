import React, { Component } from "react"
import ReactModal from "react-modal"
import styled, { createGlobalStyle } from "styled-components"

import CloseSvg from "../../images/close"
import FillButton from "../FillButton"

const MODAL_MAX_WIDTH = "550px"
const BREAKPOINT = "600px"
const GlobalStyle = createGlobalStyle`
    .TALKS__overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: auto;
        background-color: rgba(230, 230, 230, 0.75);
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
    }

    .TALKS__content {
        position: absolute;
        background-color: white;
        box-shadow: 0px 0px 1.1em 2px rgba(0, 0, 0, 0.2);
        outline: none;
        width: 100%;
        min-height: 100%;
        @media (min-width: ${BREAKPOINT}) {
            width: ${MODAL_MAX_WIDTH};
            min-height: auto;
            margin-bottom: 10vh;
            margin-top: 10vh;
        }
    }
`

const Main = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    width: 100%;
`

const Header = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
`

const Close = styled.div`
    width: 1em;
    height: 1em;
    display: flex;
    flex-flow: ;
`

const ClosePadding = styled.div`
    padding: 0.5em;
`

const Children = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    overflow-y: auto;
`

interface Props {
    isOpen: boolean
    children: React.ReactNode
    onClose: () => void
}

class Modal extends Component<Props> {
    close = () => {
        // @ts-ignore
        document.body.style.overflow = null
        this.props.onClose()
    }
    render() {
        const { children, isOpen } = this.props
        return (
            <ReactModal
                isOpen={isOpen}
                onRequestClose={() => {
                    this.close()
                }}
                onAfterOpen={() => {
                    // $FlowFixMe
                    document.body.style.overflow = "hidden"
                }}
                overlayClassName="TALKS__overlay"
                className="TALKS__content"
            >
                <GlobalStyle />
                <Main>
                    <Header>
                        <FillButton onClick={this.close}>
                            <ClosePadding>
                                <Close>
                                    <CloseSvg />
                                </Close>
                            </ClosePadding>
                        </FillButton>
                    </Header>
                    <Children>{children}</Children>
                </Main>
            </ReactModal>
        )
    }
}
export default Modal
