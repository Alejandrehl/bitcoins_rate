const Main = (props) => {
  return(
    <div className="container text-center mt-5">
      <img src={props.img_src} style={{width: 400 }} />
      <Body />
      <Footer />
    </div>
  )
}