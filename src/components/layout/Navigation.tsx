import Link from '../../src/node_modules/next/link';
import styled from '../../src/node_modules/@types/styled-components';

type Props = {
    page: string;
};

const Navigation = ({ page }: Props) => (
    <Navbar>
        <ul>
            <Tap name="home" selected={page}>
                <span />
                <Link href="/">
                    <div>Home</div>
                </Link>
            </Tap>
            <Tap name="myFarm" selected={page}>
                <span />
                <Link href="/myFarm">
                    <div>My farm</div>
                </Link>
            </Tap>
            <Tap name="farmComparison" selected={page}>
                <span />
                <Link href="/farmComparison">
                    <div>Farm comparison</div>
                </Link>
            </Tap>
            <Tap name="notification" selected={page}>
                <span />
                <Link href="/notification">
                    <div>Notification</div>
                </Link>
            </Tap>
        </ul>
    </Navbar>
);

const Navbar = styled.nav`
    /* border: 1px solid black; */
    min-width: 330px;
    display: flex;
    flex-direction: column;
    margin-top: 105px;
    ul {
        display: flex;
        flex-direction: column;
    }
`;

const Tap = styled.li<{ selected?: string; name?: string }>`
    /* border: 1px solid black; */
    position: relative;
    cursor: pointer;
    span {
        position: absolute;
        top: 25px;
        width: 200px;
        height: 10px;
        background-color: #ffffff;
        z-index: -1;
        box-shadow: 0 0.2rem 0.3rem 0.1rem rgba(85, 85, 85, 0.25);
    }
    div {
        position: absolute;
        width: 184px;
        height: 60px;
        border-radius: 15px;
        background-color: #ffffff;
        left: 34px;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        line-height: 60px;
        box-shadow: 0 0.2rem 0.3rem 0.1rem rgba(85, 85, 85, 0.25);
        transform: ${(props) => props.selected === props.name && 'translateX(85px)'};
    }
    &:hover {
        div {
            transform: translateX(85px);
            transition: all 0.9s ease-in-out;
        }
    }
    left: -330px;
    animation: left-to-right-slide 1s forwards;
    margin-bottom: 120px;
    &:nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.5s;
    }
    &:last-child {
        animation-delay: 0.8s;
    }
`;

export default Navigation;