import '../../../Style/Home/Our Testimonials/OurTestimonials.css';

const TestimonialCard = ({ user }) => {
    
    return <div className='testimonial_card'>
        <img src={user.backimage} className='card_back' alt="" />
        <img src={user.userimage} alt="" className='card_user' />
        <h1 className='card_heading'>{user.fname} <span>{user.lname}</span></h1>
        <span className='stars'>{user.stars}</span>
        <p>{user.desc}</p>
        <span className='read_more'>Read More</span>
        <hr />
    </div>
}

export default TestimonialCard;