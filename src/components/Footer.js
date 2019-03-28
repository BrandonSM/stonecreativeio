import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="//twitter.com/stonecreativeio" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="//facebook.com/stonecreativeio" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="//instagram.com/stonecreativeio/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="//github.com/stonecreative" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    {/*<li><a href="mailto:hello[at]stonecreative.io?subject=web" className="icon alt fa-envelope"><span className="label">Email</span></a></li>*/}
                </ul>
                <ul className="copyright">
                    <li>&copy; Stone Creative LLC</li>
                </ul>
            </section>
        )
    }
}

export default Footer
