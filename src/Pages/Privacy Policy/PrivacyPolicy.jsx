import '../../Style/Privacy Policy/PrivacyPolicy.css';
import p1 from '../../assets/Images/Privacy Policy/1.jpg';
import p2 from '../../assets/Images/Privacy Policy/2.jpg';
import p3 from '../../assets/Images/Privacy Policy/3.jpg';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <>
        <section className="privacy_section">
            <div className='privacy_hero_section'>
                <div data-aos="zoom-in" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
                    <h1 className="yellow_heading">Privacy Policy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                    </p>
                </div>
            </div>
            <div className='privacy_description_card'>
                <img src={p1} alt="" />
                <div>
                    <div className='heading pheading'>Loram <span className='c_secondary'>ipsum</span></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                    </p>
                </div>
            </div>
            <div className='privacy_middle_section' data-aos="fade-right" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
                <h1 className='heading pheading home_testimonial_top_heading'>Loram <span className='c_secondary home_testimonial_top_heading'>ipsum</span></h1>
                <p className='privacy_policy_paragraphs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                    facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                    dignissimos quia quis quas?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                    facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                    dignissimos quia quis quas?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                    facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                    dignissimos quia quis quas?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                    facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                    dignissimos quia quis quas?
                </p>
                <p className='privacy_policy_paragraphs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                    facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                    dignissimos quia quis quas?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                    facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                    dignissimos quia quis quas?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                    facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                    dignissimos quia quis quas?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                    facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                    dignissimos quia quis quas?
                </p>
            </div>
            <div className='privacy_bottom_top_section'>
                <div data-aos="fade-right" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
                    <h1 className='heading pheading home_testimonial_top_heading'>Loram <span className='c_secondary home_testimonial_top_heading'>ipsum</span></h1>
                    <p className='privacy_policy_paragraphs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                    </p>
                    <p className='privacy_policy_paragraphs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                    </p>
                </div>
                <img src={p2} alt="" />
            </div>
            <div className='privacy_bottom_bottom_section'>
                <img src={p3} alt="" />
                <div data-aos="fade-left" data-aos-duration='300' data-aos-offset="400" data-aos-easing="ease-in-sine">
                    <h1 className='heading pheading c_dark home_testimonial_top_heading'>Loram <span className='c_secondary home_testimonial_top_heading'>ipsum</span></h1>
                    <p className='c_dark privacy_policy_paragraphs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at officia est veritatis,
                        facilis, tempore magnam sequi aliquid vel, maiores debitis eligendi eos quibusdam. Culpa eligendi
                        dignissimos quia quis quas?
                    </p>

                </div>
            </div>
        </section>
    </>
}

export default PrivacyPolicy;