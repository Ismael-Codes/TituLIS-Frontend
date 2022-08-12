import { useNavigate } from 'react-router-dom';


export const Error_404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="row mt-5">
        <div className="col-sm-12">
          <div className="text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>

              <img src="https://cdn.pixabay.com/photo/2013/07/12/16/38/halloween-151310__340.png" alt="cat" width="200" height="150" />
            </div>

            <h3 className="h2">
              Look like you're lost
            </h3>

            <p>the page you are looking for not avaible!</p>

            <button className="btn btn-primary" onClick={() => navigate('/perfil', { replace: true })}>Go home</button>
          </div>
        </div>
      </div>

    </>
  )
}
