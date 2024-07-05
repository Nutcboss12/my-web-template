import Image from "next/image";
import Slider1 from '@/public/ggg.jpg'
import Slider2 from '@/public/ddd.jpg'
export default function Home() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src={Slider1}
            className="d-block w-100"
            alt="..."
            style={{ height: '500px', objectFit: 'cover' }} // สไตล์ inline
          />
        </div>
        <div className="carousel-item">
          <Image
            src={Slider2}
            className="d-block w-100"
            alt="..."
            style={{ height: '500px', objectFit: 'cover' }} // สไตล์ inline
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="card-group mt-3 mx-3 mb-2" >
      
  <div className="card me-3 "  style={{ height: '450px', objectFit: 'cover', overflow: 'hidden', borderRadius: '15px' }} >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7LX0Y2n7yqgVAgbVIP8JSvemDJz7h9SlNmw&s" className="card-img-top h-100" alt="..." />
  </div>
  <div className="card me-3 rounded-3" style={{ height: '450px', objectFit: 'cover' , overflow: 'hidden', borderRadius: '15px'}} >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRA3TfgLZyPJkDrEKTUhAzMmeQXPYrd8aPNA&s" className="card-img-top h-100" alt="..." />
   
  </div>
  <div className="card me-3" style={{ height: '450px', objectFit: 'cover' ,overflow: 'hidden', borderRadius: '15px'}} >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGSqplx7DvDW_WDY49qkBNTDebI321jDPBQ&s" className="card-img-top h-100" alt="..." />
  </div>
  <div className="card" style={{ height: '450px', objectFit: 'cover' ,overflow: 'hidden', borderRadius: '15px'}} >
    <img src="https://i.pinimg.com/236x/a0/60/3e/a0603e74be076d36dccf22e40594f4ef.jpg" className="card-img-top h-100" alt="..." />
  </div>
</div>
    </>
  );
}

