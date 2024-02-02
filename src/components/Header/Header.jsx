import React from 'react';
import { ShoppingCartOutlined } from "@ant-design/icons";
import { HeaderContainer, HeaderPersonalLink, HeadLinks, InputHead, HeadContent, LinkMainLogo} from './styledHeader.ts'
import RegModal from "../Modal/RegModal";

const Header = () => {
    return (
        <HeaderContainer>
                <HeadContent>
                        <LinkMainLogo>LogoDan</LinkMainLogo>
                        <HeaderPersonalLink>Каталог</HeaderPersonalLink>
                    <InputHead
                        placeholder='Введите текст'
                        type="text"
                        name="name"
                    />
                    <HeadLinks>
                        <HeaderPersonalLink>Заказы</HeaderPersonalLink>
                        <HeaderPersonalLink>Избранное</HeaderPersonalLink>
                        <RegModal/>
                    </HeadLinks>
                </HeadContent>
        </HeaderContainer>
    );
};

export default Header;