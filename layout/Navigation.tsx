import Link from 'next/link';
import styled from 'styled-components';

type Props = {
    page: string;
};

const Navigation = ({ page }: Props) => (
    <Navbar>
        <ul>
            <Tap name="HOME" selected={page}>
                <span />
                <Link href="/">
                    <div>Home</div>
                </Link>
            </Tap>
            <Tap name="MyFarm" selected={page}>
                <span />
                <Link href="/myFarmHouse">
                    <div>My farmhouse</div>
                </Link>
            </Tap>
            <Tap name="OtherFarm" selected={page}>
                <span />
                <Link href="/otherFarmHouse">
                    <div>Other farmhouse</div>
                </Link>
            </Tap>
            <Tap name="Notification" selected={page}>
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
