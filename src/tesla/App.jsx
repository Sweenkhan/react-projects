import React from 'react';
  import Header from './Header';
  import Content from './Content';
  import Footer from './Footer';



  function App() {
    return (

      <>

      <Header />

      <Content carImg = "model-3.jpg"
      title = "Model S"
      discription = "Schedule a Demo Drive"
      leftBtn = "Custom Order"
      rightBtn = "View Inventory" />

      <Content carImg = "model-s.jpg"
      title = "Model 3"
      discription = "Schedule a Demo Drive"
      leftBtn = "Custom Order"
      rightBtn = "View Inventory" />

      <Content carImg = "model-x.jpg"
      title = "Model X"
      discription = "Schedule a Demo Drive"
      leftBtn = "Custom Order"
      rightBtn = "View Inventory" />

      <Content carImg = "model-y.jpg"
      title = "Model Y"
      discription = "Schedule a Demo Drive"
      leftBtn = "Custom Order"
      rightBtn = "View Inventory" />

      <Content carImg = "solar-panel.jpg"
      title = "Solar Panels"
      discription = "Lowest Cost Solar Panels in America "
      leftBtn = "Custom Order"
      rightBtn = "View Inventory" />

      <Content carImg = "solar-roof.jpg"
      title = "Solar Roof"
      discription = "Produce Clear Energy From Your Roof"
      leftBtn = "Custom Order"
      rightBtn = "View Inventory" />

      <Content carImg = "accessories.jpg"
      title = "Accessories"
      leftBtn = "Shop Now" />

      <Footer />

      </>

    )
  }

  export default App;