import Image from "next/image"
import { Inter, Lato } from "next/font/google"

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div className={`${lato.className}`}>
      <header>
        <div className="header">
          <div className="wrapper">
            <div className="header__wrapper">
              <div className="header__logo">
                <a href="/" className="header__logo-Link">
                  <img
                    src="img/svg/odigo-Logo.svg"
                    alt="fghf"
                    className="header__logo-pic"
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__list">
                  <li className="header__item">
                    <a href="#1" className="header__link">
                      Articles
                    </a>
                  </li>
                  <li className="header__item">
                    <a href="#1" className="header__link">
                      Locations
                    </a>
                  </li>
                  <li className="header__item">
                    <a href="#1" className="header__link">
                      Videos
                    </a>
                  </li>
                  <li className="header__item">
                    <a href="#1" className="header__link">
                      Sign in
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="intro">
          <div className="wrapper">
            <h1 className="intro__title">Discover Amazing places in Japan</h1>
            <p className="inro__subtitle">
              {" "}
              Jump off balcony, onto stranger's head. Chase ball of string hide
              when guests come over. Being gorgeous with belly side up i could
              pee on this if i had the energy but under the bed, for attack the
              child, open the door,{" "}
            </p>
            <form className="search-form">
              <fieldset className="search-form__wrap">
                <p className="search-form__info">
                  <input type="text" className="search-form" />
                  <input type="text" className="search-form" />
                  <button type="submit" className="search-form__submit">
                    search
                  </button>
                </p>
              </fieldset>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
