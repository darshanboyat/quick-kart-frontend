import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import call from '../../Assets/Call.jpg'
import mail from '../../Assets/Mail.jpg'
import whatsapp from '../../Assets/Whatsapp.jpg'

function GroupExample() {
    return (
        <>
            <div id="Contact" className="d-flex" style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1 className='mt-2'>Contact</h1>
                <div className="underline mb-4"></div>
            </div>
            <CardGroup className='d-flex' style={{ justifyContent: 'space-around' }}>
               <img  src={call} alt="" style={{width: '30%'}}/>
               <img  src={mail} alt="" style={{width: '30%'}}/>
               <img  src={whatsapp} alt="" style={{width: '30%'}}/>
            </CardGroup>
            <div className="card mb-8 mt-4" />
        </>
    );
}

export default GroupExample;