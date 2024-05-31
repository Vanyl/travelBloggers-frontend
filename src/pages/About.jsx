import SubFooter from '../components/SubFooter'
import '../sass/about.sass'


const About = () => {

  return (
    <>
      <div className='about-hero'>
        <h2>About us</h2>
        <div className="travel-citation">
          <p>"The world is a book, and those who do not travel read only one page."</p>
          <span className="travel-citation-author">- Saint Augustine</span>
        </div>


      </div>
      <div className='about-container'>
        <p><span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat eros vitae justo fermentum, eget vehicula magna aliquam. Nulla facilisi. Nam varius ullamcorper risus, sed ultricies est finibus eu. Vivamus ac metus non quam lacinia tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer at justo augue. Nam euismod ligula id dui vestibulum, nec mattis nunc convallis.</p>
        <p>Proin consequat arcu eu ipsum tincidunt, ut ultricies nulla volutpat. Suspendisse potenti. Curabitur nec eros id ipsum rutrum vulputate. Quisque in ante ut eros placerat varius nec ac nunc. Sed ullamcorper sit amet mi a facilisis. Nulla facilisi. Cras hendrerit ex at leo placerat, sed finibus nulla hendrerit. In hac habitasse platea dictumst. Fusce rhoncus mi a fermentum feugiat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit deserunt amet quisquam labore odit? Laboriosam ipsum exercitationem nobis adipisci? Aliquid autem alias eum, sint fugit quam tempore porro necessitatibus.</p>
      </div>
      <SubFooter />
    </>
  )
};

export default About;