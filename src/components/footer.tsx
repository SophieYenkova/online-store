import Title from "./styled/title";
import styled from "styled-components";
import LangImg from "../assets/icons/lang.svg";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

const SFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 29px;
  height: 149px;
  background-color: hsla(0, 0%, 100%, 1);
  border-radius: 30px 30px 0 0;
`;

const SUl = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 35%;
  align-content: space-between;
  list-style-type: none;
`;

const SLi = styled.li`
  padding: 5px;
`;

const SLink = styled.a`
  display: block;
  color: hsla(0, 0%, 6%, 1);
`;

const SLinks = styled.div`
  display: flex;
  height: 31px;
  column-gap: 18px;
  align-items: baseline;
`;

const SLangs = styled.div`
  display: flex;
  height: 31px;
  column-gap: 18px;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
`;

const SPrimary = styled.span`
  color: hsla(31, 100%, 63%, 1);
  font-weight: 500;
`;

const SSecondary = styled.span`
  font-weight: 500;
`;


const Footer = () => {
  return (
    <SFooter>
      <NavLink to={SHOP_ROUTE} style={{ textDecoration: "none" }}>
        {" "}
        <Title>QPICK</Title>
      </NavLink>

      <SUl>
        <SLi>Избранное</SLi>
        <SLi>Корзина</SLi>
        <SLi>Контакты</SLi>
        <SLi>Условия сервиса</SLi>
        <SLi>
          <SLangs>
            <img src={LangImg} alt="" />

            <SPrimary>Рус</SPrimary>
            <SSecondary>Eng</SSecondary>
          </SLangs>
        </SLi>
      </SUl>
      <SLinks>
        <SLink href="https://vk.com/">
          <svg
            width="35"
            height="30"
            viewBox="0 0 35 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            focusable="false"
            aria-label="сообщество в vk"
          >
            <path
              d="M0 2.99944C0 1.96133 0.575033 1.40157 1.7251 1.32015L6.15682 1.35068C6.45425 1.35068 6.65254 1.50334 6.75168 1.80867C7.20774 3.3353 7.71833 4.65328 8.28345 5.76263C8.84857 6.87198 9.58719 8.14926 10.4993 9.59447C10.5786 9.77766 10.7075 9.86926 10.886 9.86926C11.0248 9.86926 11.1338 9.79802 11.2131 9.65553L11.3024 9.31967L11.3321 4.03754C11.3321 3.67115 11.2478 3.42689 11.0793 3.30476C10.9108 3.18263 10.5985 3.09104 10.1424 3.02997C9.78547 2.96891 9.60702 2.745 9.60702 2.35826C9.60702 2.27683 9.61693 2.21577 9.63676 2.17506C10.0532 0.851983 11.2429 0.190445 13.2059 0.190445L14.8715 0.159912C15.625 0.159912 16.2496 0.353285 16.7454 0.74003C17.2411 1.12678 17.4889 1.73743 17.4889 2.57198V9.50287C17.6277 9.60465 17.7566 9.65553 17.8756 9.65553C18.173 9.65553 18.4308 9.47234 18.6489 9.10595C20.8301 5.97127 22.0099 3.8747 22.1883 2.81624C22.1883 2.79589 22.2082 2.745 22.2478 2.66358C22.3866 2.35826 22.6147 2.09364 22.9319 1.86973C23.2492 1.64583 23.5268 1.49317 23.7647 1.41175C23.844 1.37104 23.9333 1.35068 24.0324 1.35068H28.6426L28.94 1.38121C29.3366 1.38121 29.6439 1.57459 29.8621 1.96133C29.9414 2.08346 29.9959 2.21577 30.0256 2.35826C30.0554 2.50074 30.0752 2.64323 30.0851 2.78571C30.095 2.9282 30.1 3.00962 30.1 3.02997V3.2437C29.9612 4.07826 29.6092 4.96879 29.0441 5.9153C28.479 6.86181 27.7602 7.88465 26.8877 8.98382C26.0153 10.083 25.47 10.8056 25.2519 11.1516C25.0734 11.3959 24.9842 11.6198 24.9842 11.8233C24.9842 11.9862 25.0635 12.1694 25.2221 12.3729L29.5646 17.9909C29.8026 18.3166 29.9215 18.6728 29.9215 19.0596C29.9215 19.5277 29.7431 19.9145 29.3862 20.2198C29.0292 20.5251 28.6029 20.6981 28.1072 20.7388L27.6016 20.7694H23.0806C23.0608 20.7694 23.0211 20.7745 22.9617 20.7846C22.9022 20.7948 22.8625 20.7999 22.8427 20.7999C22.4065 20.7999 22 20.6065 21.6232 20.2198C21.4844 20.057 20.5525 18.856 18.8274 16.617C18.7282 16.4745 18.5894 16.3422 18.411 16.22C18.3317 16.5457 18.2276 17.0139 18.0987 17.6245C17.9698 18.2352 17.8756 18.6728 17.8161 18.9374L17.7269 19.4565C17.5286 20.1689 17.1122 20.5964 16.4777 20.7388L16.0613 20.7694H13.1464C11.5007 20.7694 9.85983 19.9959 8.22396 18.4489C6.58809 16.9019 5.11581 14.902 3.80711 12.4493C2.49842 9.99648 1.27895 7.14169 0.148715 3.88488C0.0495718 3.62027 0 3.32512 0 2.99944ZM17.8756 10.9074C17.4592 10.9074 17.0824 10.7903 16.7454 10.5562C16.4083 10.3222 16.2397 10.0016 16.2397 9.59447V2.57198C16.2397 2.16488 16.1406 1.87482 15.9423 1.70181C15.744 1.52879 15.397 1.44228 14.9013 1.44228L13.2059 1.50334C12.3533 1.50334 11.7089 1.65601 11.2726 1.96133C12.1451 2.38879 12.5813 3.08086 12.5813 4.03754V9.41127C12.5417 9.92015 12.3434 10.3425 11.9865 10.6784C11.6295 11.0142 11.233 11.1822 10.7967 11.1822C10.2019 11.1822 9.74582 10.887 9.42856 10.2967C7.88192 7.89482 6.73185 5.61506 5.97836 3.45743L5.71067 2.66358L1.75484 2.63305C1.49707 2.63305 1.35331 2.64831 1.32357 2.67885C1.29382 2.70938 1.27895 2.79589 1.27895 2.93837C1.27895 3.12157 1.29878 3.31494 1.33844 3.51849L1.96304 5.22831C3.62866 9.64536 5.43803 13.1261 7.39116 15.6704C9.34429 18.2148 11.2627 19.487 13.1464 19.487H16.1208C16.2397 19.487 16.329 19.4514 16.3884 19.3801C16.4479 19.3089 16.4975 19.1715 16.5372 18.968L16.5966 18.6626L17.1618 15.9758C17.3204 15.6094 17.4592 15.3651 17.5782 15.243C17.7963 15.0191 18.0541 14.9071 18.3515 14.9071C18.8274 14.9071 19.3132 15.2023 19.8089 15.7926L22.3371 19.0901C22.4957 19.3547 22.6642 19.487 22.8427 19.487H27.7503C28.3452 19.487 28.6426 19.3343 28.6426 19.029C28.6426 18.9272 28.6128 18.8255 28.5534 18.7237L24.2406 13.1973C23.9035 12.7699 23.735 12.3119 23.735 11.8233C23.735 11.3348 23.8936 10.8667 24.2109 10.4188C24.4686 10.0117 24.9693 9.33494 25.7129 8.38843C26.4565 7.44192 27.1059 6.55648 27.6611 5.7321C28.2163 4.90772 28.5831 4.15968 28.7616 3.48796L28.8508 3.09104C28.831 3.05033 28.821 2.98417 28.821 2.89257C28.821 2.80098 28.8111 2.72465 28.7913 2.66358H24.1216C23.8242 2.78571 23.5863 2.96891 23.4078 3.21317L23.2293 3.79328C22.7336 5.19778 21.4348 7.36559 19.333 10.2967C18.9166 10.7038 18.4308 10.9074 17.8756 10.9074Z"
              fill="currentColor"
            />
          </svg>
        </SLink>

        <SLink href="#">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            focusable="false"
            aria-label="написать в telegram"
          >
            <path
              d="M15.05 27.09C18.2432 27.09 21.3056 25.8215 23.5636 23.5636C25.8215 21.3056 27.09 18.2432 27.09 15.05C27.09 11.8568 25.8215 8.79437 23.5636 6.53643C21.3056 4.2785 18.2432 3.01 15.05 3.01C11.8568 3.01 8.79437 4.2785 6.53643 6.53643C4.2785 8.79437 3.01 11.8568 3.01 15.05C3.01 18.2432 4.2785 21.3056 6.53643 23.5636C8.79437 25.8215 11.8568 27.09 15.05 27.09ZM15.05 30.1C6.73789 30.1 0 23.3621 0 15.05C0 6.73789 6.73789 0 15.05 0C23.3621 0 30.1 6.73789 30.1 15.05C30.1 23.3621 23.3621 30.1 15.05 30.1ZM10.3695 16.8109L6.60996 15.6385C5.79726 15.3901 5.79275 14.8303 6.79207 14.4284L21.4402 8.76964C22.2906 8.42348 22.7722 8.86144 22.4967 9.95858L20.003 21.7277C19.8284 22.566 19.3242 22.7661 18.6244 22.3794L14.7851 19.5379L12.9957 21.2656C12.8121 21.4432 12.6631 21.5952 12.3801 21.6329C12.0987 21.672 11.8669 21.5877 11.6969 21.1212L10.3875 16.8003L10.3695 16.8124V16.8109Z"
              fill="currentColor"
            />
          </svg>
        </SLink>
        <SLink href="#">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            focusable="false"
            aria-label="написать в whatsapp"
          >
            <path
              d="M7.90578 24.8235L8.9954 25.4601C10.8329 26.5317 12.9228 27.0943 15.05 27.09C17.4313 27.09 19.7591 26.3838 21.7391 25.0609C23.719 23.7379 25.2622 21.8575 26.1735 19.6575C27.0848 17.4575 27.3232 15.0366 26.8587 12.7011C26.3941 10.3656 25.2474 8.22025 23.5636 6.53643C21.8797 4.85261 19.7344 3.70591 17.3989 3.24134C15.0634 2.77678 12.6425 3.01521 10.4425 3.92649C8.24248 4.83777 6.36209 6.38096 5.03912 8.36093C3.71615 10.3409 3.01002 12.6687 3.01002 15.05C3.01002 17.2112 3.5774 19.2836 4.64144 21.1061L5.27655 22.1957L4.29378 25.8092L7.90578 24.8235ZM0.00604013 30.1L2.0408 22.6231C0.700052 20.3248 -0.0043504 17.7108 2.02155e-05 15.05C2.02155e-05 6.73788 6.7379 0 15.05 0C23.3621 0 30.1 6.73788 30.1 15.05C30.1 23.3621 23.3621 30.1 15.05 30.1C12.3903 30.1043 9.77748 29.4004 7.47987 28.0607L0.00604013 30.1ZM9.61847 7.98853C9.82014 7.97348 10.0233 7.97348 10.225 7.98251C10.3063 7.98853 10.3875 7.99757 10.4688 8.0066C10.7081 8.03368 10.9715 8.17967 11.0603 8.38134C11.5087 9.39872 11.9452 10.4236 12.3666 11.4515C12.4599 11.6803 12.4042 11.9738 12.2266 12.2597C12.1045 12.4531 11.9724 12.64 11.8308 12.8196C11.6608 13.0378 11.295 13.4381 11.295 13.4381C11.295 13.4381 11.146 13.6157 11.2032 13.837C11.2243 13.9212 11.2935 14.0431 11.3567 14.1455L11.4455 14.2885C11.8308 14.9311 12.3485 15.5828 12.9806 16.1968C13.1612 16.3714 13.3373 16.5505 13.527 16.7175C14.2313 17.3391 15.0289 17.8463 15.8898 18.2225L15.8973 18.2255C16.0252 18.2812 16.09 18.3113 16.2766 18.3911C16.3699 18.4302 16.4662 18.4648 16.564 18.4904C16.6651 18.5162 16.7716 18.5113 16.8699 18.4765C16.9683 18.4417 17.054 18.3784 17.1164 18.2948C18.206 16.9749 18.3053 16.8891 18.3144 16.8891V16.8921C18.3901 16.8215 18.48 16.7679 18.5781 16.735C18.6762 16.702 18.7803 16.6904 18.8832 16.701C18.9735 16.707 19.0653 16.7235 19.1496 16.7612C19.9488 17.1269 21.2566 17.6973 21.2566 17.6973L22.1325 18.0901C22.28 18.1608 22.414 18.3279 22.4185 18.4889C22.4245 18.5897 22.4335 18.7523 22.3989 19.0503C22.3508 19.4401 22.2334 19.9081 22.116 20.1534C22.0356 20.3209 21.9289 20.4743 21.7999 20.608C21.6481 20.7674 21.4818 20.9125 21.3033 21.0414C21.2415 21.0878 21.1788 21.133 21.1152 21.1768C20.928 21.2956 20.7356 21.4061 20.5387 21.5079C20.1513 21.7138 19.7233 21.8319 19.2851 21.8541C19.0067 21.8691 18.7282 21.8902 18.4483 21.8752C18.4363 21.8752 17.5935 21.7442 17.5935 21.7442C15.4537 21.1814 13.4749 20.1271 11.8143 18.665C11.4741 18.3655 11.1596 18.0434 10.8375 17.7229C9.49807 16.3909 8.48671 14.9537 7.87267 13.5962C7.55838 12.9299 7.38861 12.2046 7.37452 11.4681C7.36831 10.5543 7.66701 9.6646 8.22334 8.93969C8.3332 8.79822 8.43704 8.65073 8.61614 8.48067C8.80727 8.30007 8.92767 8.20375 9.05861 8.13753C9.2327 8.05029 9.42261 7.9991 9.61696 7.98703L9.61847 7.98853Z"
              fill="currentColor"
            />
          </svg>
        </SLink>
      </SLinks>
    </SFooter>
  );
};

export default Footer;