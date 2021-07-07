import Link from 'next/link';
import styled from 'styled-components';

type Props = {
    page: string;
};

const Navigation = ({ page }: Props) => (
    <Wrapper>
        <Tap name="HOME" selected={page}>
            <span />
            <Link href="/">
                <div>Home</div>
            </Link>
        </Tap>
        <Tap name="MyFarm" selected={page}>
            <span />
            <Link href="/MyFarmHouse">
                <div>My farmhouse</div>
            </Link>
        </Tap>
        <Tap name="OtherFarm" selected={page}>
            <span />
            <Link href="/OtherFarmHouse">
                <div>Other farmhouse</div>
            </Link>
        </Tap>
        <Tap name="Notification" selected={page}>
            <span />
            <Link href="/Notification">
                <div>Notification</div>
            </Link>
        </Tap>
    </Wrapper>
);

const Wrapper = styled.div`
    // border: 1px solid black;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    & > div:first-child {
        margin-top: 105px;
    }
    & > div {
        margin-bottom: 70px;
    }
`;

const Tap = styled.div<{ selected?: string; name?: string }>`
    // border: 1px solid black;
    position: relative;
    cursor: pointer;
    span {
        position: absolute;
        top: 25px;
        width: 200px;
        height: 10px;
        background-color: #ffffff;
        z-index: -1;
    }
    div {
        width: 184px;
        height: 60px;
        border-radius: 15px;
        background-color: #ffffff;
        margin-left: 34px;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        line-height: 60px;
        transform: ${(props) => props.selected === props.name && 'translateX(85px)'};
    }
    &:hover {
        div {
            transform: translateX(85px);
            transition: all 0.9s ease-in-out;
        }
    }
`;

export default Navigation;
