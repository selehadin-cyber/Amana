import "../App.css"


export default function Galeri() {
    return (
        <div className='cards'>
        <h1 className="center-text">Iftar Programs</h1>
        <div className="container" id="qu-me">
          <div className="project"><img src={require('../pictures/iftar1.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/iftar2.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/iftar3.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/iftar4.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/iftar5.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/iftar6.jpg')} className="project-image" alt="" /></div>
        </div>
        <h1 className="center-text">Udhiya Programs</h1>
        <div className="container" id="or-su">
          <div className="project"><img src={require('../pictures/kurban1.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/kurban2.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/kurban3.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/kurban4.jpg')} className="project-image" alt="" /></div>
          
        </div>
        <h1 className="center-text">Mosquees</h1>
        <div className="container" id="mo">
          <div className="project"><img src={require('../pictures/mo1.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/mo2.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/mo3.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/mo4.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/mo5.jpg')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/mo6.jpg')} className="project-image" alt="" /></div>
        </div>
      </div>
    );
}
