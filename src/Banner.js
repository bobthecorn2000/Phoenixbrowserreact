import "./styles.css";
export default function Banner() {
    return (
        <div className="Banner top-50">
    <div style={{width: 'auto', height: 'auto' }} className=" p-5 bg-primary text-white">
      <h1>Explore the web with a new horizon</h1>
      <h2></h2>
         
          <Horizon></Horizon> <br></br>
          <button className="btn btn-dark btn-lg">Download</button>
          </div> 
            </div>
    )
}
        
        export function Horizon() {
  return (
    <img style={{width: '200px' }}
      src="brand/PhoenixHorizon.webp"
      alt="Horizon logo"
    />
  )
}