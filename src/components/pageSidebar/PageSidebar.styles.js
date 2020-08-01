import styled from "styled-components"
import { Link } from "react-router-dom";

const Style = {
    Sidebar: styled.div`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 230px;
        height: 100%;
        overflow: auto;
        border-right: 2px solid ${({ theme }) => theme.movieBackground};
        background: ${({ theme }) => theme.body};
    `,

    Sidebar__Logo: styled.div`
        padding: 1.5em 0;
        text-align: left;
        position: relative;
        margin: 0 1.5em;

        &:before {
            width: 3em;
            height: .3em;
            content: "";
            display: block;
            background: ${({ theme }) => theme.yellowDark};
            border-radius: 1.5em;
            position: absolute;
            bottom: 0;
        }
    `,

    Sidebar__Nav: styled.ul`
        margin: 0 1.5em;
        margin-top: 5em;
    `,

    Sidebar__NavListItem: styled.li`
        margin-top: 1em;
        list-style: none;
    `,

    Sidebar__NavLink: styled(Link)`
        color: ${({ theme }) => theme.text};
        padding: 1em .5em;
        text-decoration: none;
        display: block;
        transition: .3s ease-in;
        font-weight: 600;

        &:hover {
            color: ${({ theme }) => theme.yellowDark};
            border-radius: .3em;
            background: ${({ theme }) => theme.sidebarNav};
        }

        &:active {
            color: ${({ theme }) => theme.yellowDark};
            border-radius: .3em;
            background: ${({ theme }) => theme.sidebarNav};
        }

        &.active {
            color: ${({ theme }) => theme.yellowDark};
            border-radius: .3em;
            background: ${({ theme }) => theme.sidebarNav};
        }
    `,

    Sidebar__Footer: styled.div`
        display: block;
        position: absolute;
        bottom: 0;
        padding: 18px 22px;
        width: 100%;

        & > h3 {
            font-size: .8em;
            font-weight: 600;
            color: ${({ theme }) => theme.text};
        }

        & > p {
            font-size: .65em;
            opacity: .5;
            color: ${({ theme }) => theme.text};
        }
    `,

    Sidebar__FooterLink: styled(Link)`
        background: #ede9d9;
        padding: .27em;
        background: ${({ theme }) => theme.sidebarNav};
        color: ${({ theme }) => theme.yellowDark};
        text-decoration: none;

        &.hover {
            color: ${({ theme }) => theme.text};
            opacity: .5;
        }
    `
}

export default Style;