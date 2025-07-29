import styled from "styled-components"

export const Header: React.FC = () => {
    return (
        <header>
            <h1>JR Green Car Scraper</h1>
        </header>
    )
}

const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: #f0f0f0;
`
