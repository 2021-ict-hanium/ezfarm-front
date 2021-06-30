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
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Tap = styled.div<{ selected?: string; name?: string }>`
    // border: 1px solid black;
    position: relative;
    span {
        position: absolute;
        top: 25px;
        background-color: white;
        width: 185px;
        height: 10px;
        z-index: -1;
    }
    div {
        // border: 1px solid black;
        margin-left: 30px;
        background-color: white;
        width: 185px;
        height: 55px;
        border-radius: 15px;
        text-align: center;
        line-height: 60px;
        font-weight: 600;
        transform: ${(props) => props.selected === props.name && 'translateX(30px)'};
        cursor: pointer;
        &:hover {
            transform: translateX(30px);
            transition: all 0.6s ease-in-out;
        }
    }
`;

export default Navigation;
