import video from '../../assets/globe.mp4'

const Company = () => {
    return ( 
        <div>
             <section className="wrapper">
                <h1>Company Profile</h1>
                <table>
                    <tbody><tr>
                        <th>Company name</th>
                        <td>Net Smile, Inc.</td>
                    </tr>
                    <tr>
                        <th>Establishment</th>
                        <td>2013/10/25</td>
                    </tr>
                    <tr>
                        <th>CEO</th>
                        <td>Yoshimitsu Saito<br />1993 Graduated from the University of Tokyo Faculty of Engineering<br />1995 Graduated from the University of Tokyo School of Engineering<br />Director of Japanese RPA Association</td>
                    </tr>
                    <tr>
                        <th>Business contents</th>
                        <td>
                            <ul>
                                <li>Development and support of artificial intelligence / machine learning simulation and programming</li>
                                <li>Especially RPA, business automation, natural language processing, automatic dialog systems, AI for investment</li>
                                <li>Development and support of computer simulation programs</li>
                                <li>Development and support of mathematical science, technical computing, data analysis software</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Capital</th>
                        <td>320 million YEN</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>Nanzando Building 3F, 4-1-11, Yushima, Bunkyo-ku, Tokyo, 113-0034 Japan</td>
                    </tr>
                    <tr>
                        <th>URL</th>
                        <td><a href="https://netsmile.jp/en/">https://netsmile.jp/en/</a></td>
                    </tr>
                </tbody>
                
                </table>
            </section>
            <section className='wrapper'>
                <div id='companyVideoDiv'>
                <video src={video} autoPlay loop id="companyVideo"></video>

                </div>
            </section>
        </div>
     );
}
 
export default Company;