/*import React, {useEffect } from 'react'
import {useTranslation} from "react-i18next";
import {AiOutlineGlobal} from "react-icons/ai";
import i18next from 'i18next';
import cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';



const languages = [
    {
        code: "es",
        name: "Spanish",
        country_code: 'es'
    },
    {
        code: "en",
        name: "English",
        country_code: 'gb'
    },
    {
        code: "ar",
        name: 'العربية',
        country_code: 'sa',
        dir: "ltr"
    }
]
//console.log(languages[0]);


const Hero = ({handleClickHeader}) => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const {t} = useTranslation()

    const refreshPage() {
       window.location.reload(false)
    }


    useEffect(() => {
        //console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
    }, [currentLanguage, t])

    return (
        <>
           {/!* <div class="dropdown">
                <button onClick={handleClickHeader} className="btn btn-link dropdown-toggle"
                        type="button"
                        aria-expanded="false"
                        id="dropdownMenuButton1"
                        style={{fontSize: '40px'}}>
                    <AiOutlineGlobal/>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><span className="dropdown-item-text">{t('languages')}</span></li>
                    {languages.map(({code, name, country_code}) => (
                        <li key={country_code}>
                            <button className="dropdown-item">
                                onClick={() => i18next.changeLanguage(code)}
                                disabled= {currentLanguageCode === code}>
                                <span
                                    className={`flag-icon flag-icon-${country_code} mx-2`}
                                    style={{
                                        opacity: code === currentLanguageCode ? 0.5 : 1
                                    }}>
                                </span>

                                {languages.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>*!/}
            <Container className="d-flex justify-content-end px-0">
                <Button className="me-1 small-devices-hide">
                    <Link
                        to={"/contact"}
                        className="link-light link-underline-opacity-0"
                    >
                        {t("contact")}
                    </Link>
                </Button>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <i className="bi bi-translate icon-lg"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {languages.map(({ code, name, country_code }) => (
                            <Dropdown.Item
                                key={country_code}
                                onClick={() => {
                                    i18next.changeLanguage(code);
                                    refreshPage();
                                }}
                                disabled={code === currentLanguageCode}
                            >
                                {name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            ) : (
            <Container className="d-flex justify-content-end px-0">
                <Button className="me-1">
                    <Link to={"/"} className="link-light link-underline-opacity-0">
                        <i className="fa-solid fa-house icon-lg"></i>
                    </Link>
                </Button>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        <i className="bi bi-translate icon-lg"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {languages.map(({ code, name, country_code }) => (
                            <Dropdown.Item
                                key={country_code}
                                onClick={() => {
                                    i18next.changeLanguage(code);
                                    refreshPage();
                                }}
                                disabled={code === currentLanguageCode}
                            >
                                {name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </>
    );
}

export default Hero;*/

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";
//import {useTranslation} from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";
import cookies from "js-cookie";

const languages = [
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
    dir: "ltr",
  },
  {
    code: "es",
    name: "Castellano",
    country_code: "es",
    dir: "ltr",
  },
];

function Hero() {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  let location = useLocation();
  /*const {t} = useTranslation();*/

  const refreshPage = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);

  return (
    <Container fluid className="my-1">
      <Row>
        <Col
          xs={4}
          md={2}
          xl={1}
          className="text-center d-flex align-items-center align-self-center"
        ></Col>

        <Col
          xs={8}
          md={10}
          xl={11}
          className="d-flex flex-wrap justify-content-end align-self-center"
        >
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-translate"
                viewBox="0 0 16 16"
              >
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ background: "#eae8c8" }}>
              {languages.map(({ code, name, country_code }) => (
                <Dropdown.Item
                  key={country_code}
                  onClick={() => {
                    i18next.changeLanguage(code);
                    refreshPage();
                  }}
                  disabled={code === currentLanguageCode}
                >
                  {name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
