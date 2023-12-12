import { Fade } from 'react-awesome-reveal';
import face from '../../assets/Images/Gallary/News Feed/face.jpg';
import insta from '../../assets/Images/Gallary/News Feed/insta.jpg'
import '../../Style/Gallary/NewsFeed.css';
import { InstagramEmbed } from 'react-social-media-embed';

const NewsFeed = () => {
    return <section className='gallary_news_section'>
        <div className='gallary_news_left'>
            <Fade direction='left' cascade damping={0.2}>
                <h1 className='heading_bold c_dark home_testimonial_top_heading'>New Feed <span className='c_green'> Widgets</span></h1>
                <p className='c_dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam ea odit cumque corporis
                    voluptatum repudiandae, eius laborum cupiditate quis laudantium atque consequuntur sapiente
                    voluptates beatae saepe nesciunt officiis error dicta.
                </p>
            </Fade>
        </div>
        <div className='social_media_gallery'>
            <div className='gallary_news_middle'>
                <img src={face} alt="" />
                <iframe title='facebook' className='iframe' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWebreate&tabs=timeline&width=500px&height=499&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="500px" height="499" style={{ border: "none", overflow: "scroll", scrollbarWidth: "thin !important" }} ></iframe>
            </div>
            <div className='gallary_news_right'>
                <img src={insta} alt="" />
                <div className='instagram'><InstagramEmbed url="https://www.instagram.com/p/Cl29HdYr7tM/" width={328}></InstagramEmbed></div>
            </div>
        </div>
    </section>
}

export default NewsFeed;