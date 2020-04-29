import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import logo from './../../public/assets/logo.svg'
import facebook from './../../public/assets/Facebook.png'
import instagram from './../../public/assets/Instagram.png'
import twitter from './../../public/assets/Twitter.png'
import youtube from './../../public/assets/Youtube.png'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
      <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
              </div>
              <div className="column is-4">
              </div>
              <div className="social-icons">
                <a title="facebook" href="https://www.facebook.com/CaroYoga-183518078972158/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '2.5em', height: '2.5em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/CaroSambado">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '2.5em', height: '2.5em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/carolyogapilates/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '2.5em', height: '2.5em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCfql-K5DnU35Yw1pKSKEC4Q">
                  <img
                    src={youtube}
                    alt="youtube"
                    style={{ width: '2.5em', height: '2.5em' }}
                  />
                </a>
                <h4>Carolina Sambado</h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}