import Cards from "./Cards"
import MainColumn from "./MainColumn"

const Main = () => {

    return (
<main className="main">
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                <div className="main__column column">
                  <div className="column__title">
                    <p>Без статуса</p>
                  </div>
                  <Cards />
                </div>
                <MainColumn />
              </div>
            </div>
          </div>
        </main>
    )
}
 
export default Main 