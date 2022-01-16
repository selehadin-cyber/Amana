import "../App.css"


export default function Galeri() {
    return (
        <div className='cards'>
        <h1 className="center-text">Galeri</h1>
        <div className="container" id="qu-me">
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
        </div>
        <h1 className="center-text">Orphan Support</h1>
        <div className="container" id="or-su">
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
        </div>
        <h1 className="center-text">Mosquees</h1>
        <div className="container" id="mo">
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
          <div className="project"><img src={require('../pictures/DSC_0002.JPG')} className="project-image" alt="" /></div>
        </div>
      </div>
    );
}
