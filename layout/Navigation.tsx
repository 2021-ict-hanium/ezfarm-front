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
    </Wrapper>
);

const Wrapper = styled.div`
    /* border: 1px solid black; */
    min-width: 330px;
    display: flex;
    flex-direction: column;
    margin-top: 105px;
`;

const Tap = styled.div<{ selected?: string; name?: string }>`
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
        animation: login-page-line 1s;
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
        transform: ${(props) => props.selected === props.name && 'translateX(85px)'};
        animation: navigation-tap 1s;
    }
    &:hover {
        div {
            transform: translateX(85px);
            transition: all 0.9s ease-in-out;
        }
    }
    margin-bottom: 120px;
`;

export default Navigation;
