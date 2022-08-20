import React from 'react'
import "./roadmap.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../containers/footer/Footer"
import Accordian1 from "../../parts/accordian1/Accordian1"
import TabsApp from "../../parts/tabs/TabsApp"
const Roadmap = (props) => {
  let curruser = props.userdata;
  return (
    <div><Navbar userdata={curruser} />
      <div className='container roadmap-main'>
        <div className='row'>
          <div className='col'>
          </div>
        </div>

        {/* <div className='row'>
          <div className='col-1'></div>
          <div className='col-10 mt-5 mb-5'>
            <Accordian1 />
          </div>
          <div className='col-1'></div>
        </div> */}
        <div className='row'>
          <TabsApp tabs={[
            {
              id: 1,
              tabTitle: 'DSA',
              title: 'Title 1',
              content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
            },
            {
              id: 2,
              tabTitle: 'Competitive Programming',
              title: 'Title 2',
              content: 'Contenido de tab 2.'
            },
            {
              id: 3,
              tabTitle: 'Web Development',
              title: 'Title 3',
              content: 'Contenido de tab 3.'
            }
          ]} />
        </div>
      </div>
      <Footer userdata={curruser} />
    </div>
  )
}

export default Roadmap