import "../App.css"


export default function Galeri() {
    return (
        <div className='cards'>
        <h1>Galeri</h1>
        <div className="container">
          <div className="project"><img src="https://picsum.photos/200/300" className="project-image" alt="" /></div>
          <div className="project"><img src="https://picsum.photos/200/300" className="project-image" alt="" /></div>
          <div className="project"><img src="https://picsum.photos/200/300" className="project-image" alt="" /></div>
          <div className="project"><img src="https://picsum.photos/200/300" className="project-image" alt="" /></div>
          <div className="project"><img src="https://picsum.photos/200/300" className="project-image" alt="" /></div>
          <div className="project"><img src="https://picsum.photos/200/300" className="project-image" alt="" /></div>
        </div>
      </div>
    );
}
